import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, SecurityContext } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { LayoutsModule } from 'src/app/shared/layout/layout.module';

import { DocsPreviewerComponent } from './pages/docs-previewer/docs-previewer.component';
import { PreviewerRoutingModule } from './pages/docs-routing.module';
import { DocsTableComponent } from './pages/docs-table/docs-table.component';
import { DocsService } from '../../core/services/http/docs.service';


@NgModule({
  declarations: [
    DocsPreviewerComponent,
    DocsTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutsModule,
    MatTableModule,
    HttpClientModule,
    PreviewerRoutingModule,
    MarkdownModule.forRoot({ loader: HttpClient,  sanitize: SecurityContext.NONE }),
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    DocsService
  ]
})
export class DocsModule { }