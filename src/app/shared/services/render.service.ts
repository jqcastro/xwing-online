import { Injectable } from '@angular/core';
import * as BABYLON from 'babylonjs';

@Injectable()
export class RenderService {

  private SKYBOX_EXTENSIONS: string[] = [
    '_px.png',
    '_py.png',
    '_pz.png',
    '_nx.png',
    '_ny.png',
    '_nz.png'
  ];

  constructor() { }

  public renderBoard(canvas: HTMLCanvasElement) {
    // Load the BABYLON 3D engine
    const engine = new BABYLON.Engine(canvas, true);

    // Now, call the createScene function that you just finished creating
    const scene = this.createScene(engine, canvas);

    // Register a render loop to repeatedly render the scene
    engine.runRenderLoop(() => scene.render());

    // attach handlers
    this.attachHandlers(engine);
  }

  private createScene(
    engine: BABYLON.Engine,
    canvas: HTMLCanvasElement
    ): BABYLON.Scene {

    // Now create a basic Babylon Scene object
    const scene = new BABYLON.Scene(engine);
    // Change the scene background color to green.
    scene.clearColor = new BABYLON.Color4(0, 0, 0, 1);
    // This creates and positions a free camera
    const camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);
    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());
    // This attaches the camera to the canvas
    camera.attachControl(canvas, false);

    // skybox
    const envTexture = new BABYLON.CubeTexture('/assets/textures/skybox/skybox', scene, this.SKYBOX_EXTENSIONS);
    scene.createDefaultSkybox(envTexture, true);

    // Leave this function
    return scene;
  }

  private attachHandlers(engine: BABYLON.Engine) {
    // Watch for browser/canvas resize events
    window.addEventListener('resize', () => engine.resize());
  }
}
