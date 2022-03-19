import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, SecurityContext } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { LayoutsModule } from 'src/app/shared/layout/layout.module';

import { PageService } from '../../core/services/http/page.service';
import { PreviewerComponent } from './pages/markdown-previewer/markdown-previewer.component';
import { PreviewerRoutingModule } from './pages/previewer-routing.module';


@NgModule({
  declarations: [
    PreviewerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutsModule,
    HttpClientModule,
    PreviewerRoutingModule,
    MarkdownModule.forRoot({ loader: HttpClient,  sanitize: SecurityContext.NONE })
  ],
  providers: [
    PageService
  ]
})
export class PreviewerModule { }
