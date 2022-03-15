import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, SecurityContext } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import { PreviewerRoutingModule } from './previewer-routing.module';
import { PreviewerComponent } from './previewer.component';
import { PreviewerService } from './previewer.service';


@NgModule({
  declarations: [
    PreviewerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    PreviewerRoutingModule,
    MarkdownModule.forRoot({ loader: HttpClient,  sanitize: SecurityContext.NONE })
  ],
  providers: [
    PreviewerService
  ]
})
export class PreviewerModule { }
