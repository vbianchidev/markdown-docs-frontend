import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EditorModule } from './editor/editor.module';
import { HomepageModule } from './homepage/homepage.module';
import { PreviewerModule } from './previewer/previewer.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PreviewerModule, 
    HomepageModule,
    EditorModule
  ]
})
export class PagesModule { }
