import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, SecurityContext } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { markedOptionsFactory } from 'src/app/core/config/markedjs.config';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { LayoutsModule } from 'src/app/shared/layout/layout.module';

import { DocsRoutingModule } from './pages/docs-routing.module';
import { DocsEditorComponent } from './pages/pages-editor/pages-editor.component';
import { DocsPreviewerComponent } from './pages/pages-previewer/pages-previewer.component';
import { DocsTableComponent } from './pages/pages-table/pages-table.component';
import { PageService } from './services/page.service';

@NgModule({
  declarations: [
    DocsPreviewerComponent,
    DocsEditorComponent,
    DocsTableComponent
  ],
  imports: [
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory
      }
    }),
    CommonModule,
    ComponentsModule,
    RouterModule,
    LayoutsModule,
    HttpClientModule,
    DocsRoutingModule,
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    MatGridListModule,
    MatPaginatorModule
  ],
  providers: [PageService]
})
export class PageModule {}
