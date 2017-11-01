import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmComponent } from './../components/confirm/confirm.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ConfirmComponent,
  ],
  exports: [
    ConfirmComponent,
  ]
})
export class ConfirmModule { }
