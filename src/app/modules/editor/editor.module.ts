import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EditorRoutingModule } from './pages/editor-routing.module';
import { FormComponent } from './pages/form/form.component';
import { TableComponent } from './pages/table/table.component';


@NgModule({
  declarations: [
    FormComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    EditorRoutingModule
  ]
})
export class EditorModule { }
