import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from 'app/board/board.component';
import { MenuComponent } from 'app/menu/menu.component';
import { GameResolver } from 'app/resolver/game.resolver';
import { NotFoundComponent } from "app/not-found/not-found.component";

const resolvers =  {
  game: GameResolver
};

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'game/:gameId',
    component: BoardComponent,
    resolve: resolvers
  },
  {
    path: '404', 
    component: NotFoundComponent
  },
  {
    path: '**', redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [GameResolver]
})
export class AppRoutingModule { }
