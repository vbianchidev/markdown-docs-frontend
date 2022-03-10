import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { RouterModule } from '@angular/router';
import { EditorRoutingModule } from './editor-routing.module';



@NgModule({
  declarations: [
    EditorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    EditorRoutingModule
  ]
})
export class EditorModule { }
