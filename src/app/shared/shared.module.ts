import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BaseModule } from './base/base.module';
import { LayoutsModule } from './layout/layout.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutsModule,
    BaseModule
  ]
})
export class SharedModule { }
