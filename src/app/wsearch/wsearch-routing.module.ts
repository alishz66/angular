import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WsearchHomeComponent } from './wsearch-home/wsearch-home.component';


const routes: Routes = [
  { path: '', component: WsearchHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WsearchRoutingModule { }
