import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeModule } from './home-module/home.module';
import { DocsModule } from './page-module/docs.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DocsModule, 
    HomeModule
  ]
})
export class ModulesModule { }
