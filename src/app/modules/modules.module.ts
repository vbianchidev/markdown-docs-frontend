import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomepageModule } from './homepage/homepage.module';
import { DocsModule } from './markdown/docs.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DocsModule, 
    HomepageModule
  ]
})
export class ModulesModule { }
