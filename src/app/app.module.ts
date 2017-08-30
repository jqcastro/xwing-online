import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BoardComponent } from './board/board.component';
import { GameService } from 'app/shared/services/game.service';
import { AnimationService } from 'app/shared/services/animation.service';
import { NavigationService } from 'app/shared/services/navigation.service';
import { ToUnitPipe } from './shared/pipes/to-unit.pipe';
import { RelativeSizePipe } from './shared/pipes/relative-size.pipe';
import { ShipComponent } from './ship/ship.component';
import { DialComponent } from './dial/dial.component';
import { ManeuverComponent } from './dial/maneuver/maneuver.component';
import { RenderService } from 'app/shared/services/render.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { XwoErrorHandler } from 'app/errors/xwo-error-handler';
import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BoardComponent,
    ToUnitPipe,
    RelativeSizePipe,
    ShipComponent,
    DialComponent,
    ManeuverComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClickOutsideModule
  ],
  providers: [
    GameService,
    AnimationService,
    RenderService,
    NavigationService,
    {
      provide: ErrorHandler,
      useClass: XwoErrorHandler,
      deps: [Injector]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
