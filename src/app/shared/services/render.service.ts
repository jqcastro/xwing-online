import { Injectable } from '@angular/core';
import * as BABYLON from 'babylonjs';
import { Game } from 'app/model/game';

@Injectable()
export class RenderService {

  private SCALE_FACTOR: number = 0.01;
  private SKYBOX_EXTENSIONS: string[] = [
    '_px.png',
    '_py.png',
    '_pz.png',
    '_nx.png',
    '_ny.png',
    '_nz.png'
  ];

  constructor() { }

  public render(canvas: HTMLCanvasElement, game: Game) {
    // Load the BABYLON 3D engine
    const engine = new BABYLON.Engine(canvas, true);

    // Now, call the createScene function that you just finished creating
    const scene = this.createScene(engine, canvas, game);

    // Register a render loop to repeatedly render the scene
    engine.runRenderLoop(() => scene.render());

    // attach handlers
    this.attachHandlers(engine);
  }

  private createScene(
    engine: BABYLON.Engine,
    canvas: HTMLCanvasElement,
    game: Game
    ): BABYLON.Scene {

    // Now create a basic Babylon Scene object
    const scene = new BABYLON.Scene(engine);
    // Change the scene background color to green.
    scene.clearColor = new BABYLON.Color4(0, 0, 0, 1);
    // This creates and positions a free camera
    const camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 5, -10), scene);
    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());
    // This attaches the camera to the canvas
    camera.attachControl(canvas, false);

    // skybox
    const envTexture = new BABYLON.CubeTexture('/assets/images/skybox/skybox', scene, this.SKYBOX_EXTENSIONS);
    scene.createDefaultSkybox(envTexture, true);

    // This creates a light, aiming 0,1,0 - to the sky.
    const light = new BABYLON.HemisphericLight('environment_light', new BABYLON.Vector3(0, 1, 0), scene);

    // board
    const board = BABYLON.MeshBuilder.CreateGround('board', {
      width: this.scale(game.board.width),
      height: this.scale(game.board.height),
    }, scene);
    const boardMaterial = new BABYLON.StandardMaterial('board_texture', scene);
    boardMaterial.diffuseTexture = new BABYLON.Texture(game.board.background, scene);
    board.material = boardMaterial;

    // Leave this function
    return scene;
  }

  private attachHandlers(engine: BABYLON.Engine) {
    // Watch for browser/canvas resize events
    window.addEventListener('resize', () => engine.resize());
  }

  private scale(value: number): number {
    return value * this.SCALE_FACTOR;
  }
}
