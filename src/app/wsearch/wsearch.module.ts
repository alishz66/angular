import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { WsearchRoutingModule } from './wsearch-routing.module';
import { PageListComponent } from './page-list/page-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { WsearchHomeComponent } from './wsearch-home/wsearch-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PageListComponent, SearchBarComponent, WsearchHomeComponent],
  imports: [
    CommonModule,
    WsearchRoutingModule,
    SharedModule
  ]
})
export class WsearchModule { }
