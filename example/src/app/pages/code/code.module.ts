import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TSPirsmModule } from './../../tools-ui'
import { CodeComponent } from './pad/code.component';

@NgModule({
  imports: [
    CommonModule,
    TSPirsmModule,
    RouterModule.forChild([
      { path: 'pad', component: CodeComponent }
    ])
  ],
  declarations: [
    CodeComponent,
  ]
})
export class CodeModule { }
