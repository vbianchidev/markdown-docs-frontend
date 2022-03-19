import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DocsModule } from './docs/docs.module';
import { HomepageModule } from './home/home.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DocsModule, 
    HomepageModule
  ]
})
export class ModulesModule { }
