import { Injectable } from '@angular/core';
import {
  Engine,
  Scene,
  Color4,
  Vector3,
  FreeCamera,
  CubeTexture,
  HemisphericLight,
  MeshBuilder,
  StandardMaterial,
  Texture,
  Vector4,
  Color3,
  PickingInfo,
  HighlightLayer,
  Mesh
} from 'babylonjs';
import { GameService } from 'app/shared/services/game.service';
import { Game } from 'app/model/game';
import { Ship } from 'app/model/ship';
import { Sizes } from 'app/model/size.enum';
import { Utils } from 'app/shared/utils/utils';
import { FactionColors } from "app/model/faction.enum";

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
  private selectedMesh: Mesh;

  constructor(
    private gameService: GameService
  ) { }

  public render(canvas: HTMLCanvasElement, game: Game) {
    // Load the BABYLON 3D engine
    const engine = new Engine(canvas, true);

    // Now, call the createScene function that you just finished creating
    const scene = this.createScene(engine, canvas, game);

    // Register a render loop to repeatedly render the scene
    engine.runRenderLoop(() => scene.render());

    // attach handlers
    this.attachHandlers(engine, scene, game);
  }

  private createScene(
    engine: Engine,
    canvas: HTMLCanvasElement,
    game: Game
    ): Scene {

    // create a basic Babylon Scene object
    const scene = new Scene(engine);
    // change the scene background color to green.
    scene.clearColor = new Color4(0, 0, 0, 1);
    // this creates and positions a free camera
    const camera = new FreeCamera('camera', new Vector3(0, 5, -10), scene);
    // this targets the camera to scene origin
    camera.setTarget(Vector3.Zero());
    // this set the camera speed
    camera.speed = 0.1;
    // this attaches the camera to the canvas
    camera.attachControl(canvas, false);

    // skybox
    const envTexture = new CubeTexture('/assets/images/skybox/skybox', scene, this.SKYBOX_EXTENSIONS);
    scene.createDefaultSkybox(envTexture, true);

    // this creates a light, aiming 0,1,0 - to the sky.
    const light = new HemisphericLight('environmentLight', new Vector3(0, 1, 0), scene);

    // this is the higlight layer used to highlight selected meshes
    const highLightLayer = new HighlightLayer("highLight", scene, { camera: camera });

    // board
    const board = MeshBuilder.CreateGround('board', {
      width: Utils.scale(game.board.width),
      height: Utils.scale(game.board.height),
    }, scene);
    const boardMaterial = new StandardMaterial('boardMaterial', scene);
    boardMaterial.diffuseTexture = new Texture(game.board.background, scene);
    board.material = boardMaterial;

    // ships
    game.players.forEach((player, playerIndex) =>
      player.squad.ships.forEach((ship, shipIndex) =>
        this.renderShip(ship, playerIndex, shipIndex, scene)
      )
    );

    return scene;
  }

  private renderShip(ship: Ship, playerIndex: number, shipIndex: number, scene: Scene) {
    const texture = new Texture(`/assets/images/ships/${ship.type}-no-pin.png`, scene);
    const shipMaterial = new StandardMaterial('shipMaterial', scene);
    shipMaterial.diffuseTexture = texture;

    const faceColors = new Array(6).fill(FactionColors[ship.faction]);
    faceColors[4] = undefined;
    const faceUV: Vector4[] = new Array(6).fill(Vector4.Zero());
    faceUV[4] = new Vector4(0, 0, 1, 1);

    const options = {
      width: Utils.scale(Sizes[ship.size]),
      depth: Utils.scale(Sizes[ship.size]),
      height: Utils.scale(5),
      faceColors: faceColors,
      faceUV: faceUV
    };

    const shipMesh = MeshBuilder.CreateBox(ship.id, options, scene);
    shipMesh.material = shipMaterial;

    // position meshes
    shipMesh.position.x = Utils.scale(100 * shipIndex);
    shipMesh.position.z = Utils.scale(100 * playerIndex);
    shipMesh.position.y = options.height * 0.51;
  }

  private attachHandlers(engine: Engine, scene: Scene, game: Game) {
    // watch for browser/canvas resize events
    window.addEventListener('resize', () => engine.resize());

    //when pointer down event is raised
    scene.onPointerPick = (evt: PointerEvent, pickInfo: PickingInfo) => {
      // if the click hits the ground object, we change the impact position
      if (pickInfo.hit) {
        const pickedMesh = scene.getMeshByName(pickInfo.pickedMesh.name) as Mesh;
      
        const selectedShip = game.players.map(p => p.squad.ships)
          .reduce((p, c) => p.concat(c))
          .find(s => s.id === pickedMesh.name);
        
        const highLightLayer = scene.highlightLayers[0];
        // remove previous highlight
        if (this.selectedMesh) {
          highLightLayer.removeMesh(this.selectedMesh);
          this.selectedMesh = null;
        }
        
        // highlight selected mesh
        if (selectedShip) {
          this.selectedMesh = pickedMesh;
          highLightLayer.addMesh(pickedMesh, FactionColors[selectedShip.faction]);

          // comunicate selected ship to game service
          this.gameService.setSelectedShip(selectedShip);
        }
      }
    };
  }
}
