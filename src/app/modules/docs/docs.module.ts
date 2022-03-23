import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, SecurityContext } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { LayoutsModule } from 'src/app/shared/layout/layout.module';

import { DocsService } from '../../core/services/http/docs.service';
import { DocsEditorComponent } from './pages/docs-editor/docs-editor.component';
import { DocsPreviewerComponent } from './pages/docs-previewer/docs-previewer.component';
import { DocsRoutingModule } from './pages/docs-routing.module';
import { DocsTableComponent } from './pages/docs-table/docs-table.component';


@NgModule({
  declarations: [
    DocsPreviewerComponent,
    DocsEditorComponent,
    DocsTableComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    MatListModule,
    MatSnackBarModule,
    LayoutsModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    DocsRoutingModule,
    MarkdownModule.forRoot({ loader: HttpClient,  sanitize: SecurityContext.NONE }),
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [
    DocsService
  ]
})
export class DocsModule { }