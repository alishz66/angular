import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardHomeComponent } from './card-home/card-home.component';


const routes: Routes = [
  { path: '', component: CardHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditCardRoutingModule { }
