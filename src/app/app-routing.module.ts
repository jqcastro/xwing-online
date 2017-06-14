import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from 'app/board/board.component';
import { MenuComponent } from 'app/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'game/:gameId',
    component: BoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
