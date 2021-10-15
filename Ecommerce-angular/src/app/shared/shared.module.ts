import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderTotalsComponent } from '../order-totals/order-totals.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';


@NgModule({
    declarations: [OrderTotalsComponent, LoadingSpinnerComponent],
    imports: [
      CommonModule
    ],
    exports: [
        OrderTotalsComponent,
        LoadingSpinnerComponent
    ]
  })
  export class SharedModule { }
