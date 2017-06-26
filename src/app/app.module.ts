import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BoardComponent } from './board/board.component';
import { GameService } from 'app/shared/services/game.service';
import { NavigationService } from 'app/shared/services/navigation.service';
import { ToUnitPipe } from './shared/pipes/to-unit.pipe';
import { RelativeSizePipe } from './shared/pipes/relative-size.pipe';
import { ShipComponent } from './ship/ship.component';
import { DialComponent } from './dial/dial.component';
import { ManeuverComponent } from './dial/maneuver/maneuver.component';
import { RenderService } from 'app/shared/services/render.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BoardComponent,
    ToUnitPipe,
    RelativeSizePipe,
    ShipComponent,
    DialComponent,
    ManeuverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    NavigationService,
    GameService,
    RenderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
