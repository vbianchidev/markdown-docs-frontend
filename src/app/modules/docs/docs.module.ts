import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, SecurityContext } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { LayoutsModule } from 'src/app/shared/layout/layout.module';

import { DocsService } from './services/docs.service';
import { DocsPreviewerComponent } from './pages/docs-previewer/docs-previewer.component';
import { PreviewerRoutingModule } from './pages/docs-routing.module';
import { DocsTableComponent } from './pages/docs-table/docs-table.component';


@NgModule({
  declarations: [
    DocsPreviewerComponent,
    DocsTableComponent
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
    DocsService
  ]
})
export class DocsModule { }
