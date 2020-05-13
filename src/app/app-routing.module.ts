import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: 'elements', loadChildren: () => import('./element/element.module')
      .then((m) => m.ElementModule)
  },
  {
    path: 'collections', loadChildren: () => import('./collections/collections.module')
      .then((m) => m.CollectionsModule)
  },
  {
    path: 'views', loadChildren: () => import('./views/views.module')
      .then((m) => m.ViewsModule)
  },
  {
    path: 'mods', loadChildren: () => import('./mods/mods.module')
      .then((m) => m.ModsModule)
  },
  {
    path: 'wsearch', loadChildren: () => import('./wsearch/wsearch.module')
      .then((m) => m.WsearchModule)
  },
  {
    path: 'creditCard', loadChildren: () => import('./credit-card/credit-card.module')
      .then((m) => m.CreditCardModule)
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
