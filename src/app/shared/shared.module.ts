import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    TableModule,
    ButtonModule
  ]
})
export class SharedModule { }
