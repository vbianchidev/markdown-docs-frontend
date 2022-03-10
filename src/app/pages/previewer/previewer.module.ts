import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewerComponent } from './previewer.component';
import { RouterModule } from '@angular/router';
import { PreviewerRoutingModule } from './previewer-routing.module';


@NgModule({
  declarations: [
    PreviewerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PreviewerRoutingModule
  ]
})
export class PreviewerModule { }
