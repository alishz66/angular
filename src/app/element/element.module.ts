import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementRoutingModule } from './element-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimesDirective } from './times.directive';
import { SharedModule } from '../shared/shared.module';
import { SegmentComponent } from './segment/segment.component';


@NgModule({
  declarations: [ElementsHomeComponent, PlaceholderComponent, TimesDirective, SegmentComponent],
  imports: [
    CommonModule,
    ElementRoutingModule,
    SharedModule
  ],
  exports:[
    
  ]
})
export class ElementModule { }
