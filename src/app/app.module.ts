import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BoardComponent } from './board/board.component';
import { GameService } from 'app/shared/services/game.service';
import { NavigationService } from 'app/shared/services/navigation.service';
import { ToPixelsPipe } from './shared/pipes/to-pixels.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    GameService,
    NavigationService,
    ToPixelsPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
