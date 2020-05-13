import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreditCardRoutingModule } from './credit-card-routing.module';
import { CardHomeComponent } from './card-home/card-home.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './card/card.component';
import { CardFormComponent } from './card-form/card-form.component';


@NgModule({
  declarations: [CardHomeComponent, CardComponent, CardFormComponent],
  imports: [
    CommonModule,
    CreditCardRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CreditCardModule { }
