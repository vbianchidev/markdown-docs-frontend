import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PreviewerResolver } from '../../../core/resolvers/previewer.resolver';
import { DocsEditorComponent } from './docs-editor/docs-editor.component';
import { DocsPreviewerComponent } from './docs-previewer/docs-previewer.component';
import { DocsTableComponent } from './docs-table/docs-table.component';

const routes: Routes = [
  {
    path: '', 
    component: DocsTableComponent,
  }, {
    path: 'novo', 
    component: DocsEditorComponent
  }, { 
    path: ':slug', 
    runGuardsAndResolvers: "pathParamsOrQueryParamsChange",
    component: DocsPreviewerComponent,
    resolve: {
      previewer: PreviewerResolver
    }
  }, {
    path: 'editar/:slug', 
    component: DocsEditorComponent,
    resolve: {
      previewer: PreviewerResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule { }