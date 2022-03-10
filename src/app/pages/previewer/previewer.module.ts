import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewerComponent } from './previewer.component';
import { RouterModule } from '@angular/router';
import { PreviewerRoutingModule } from './previewer-routing.module';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [
    PreviewerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PreviewerRoutingModule,
    MarkdownModule.forRoot()
  ]
})
export class PreviewerModule { }
