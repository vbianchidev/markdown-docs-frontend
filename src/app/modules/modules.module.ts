import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomepageModule } from './homepage/homepage.module';
import { PreviewerModule } from './previewer/previewer.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PreviewerModule, 
    HomepageModule
  ]
})
export class ModulesModule { }
