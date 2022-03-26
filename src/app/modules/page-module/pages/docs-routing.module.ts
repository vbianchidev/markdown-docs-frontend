import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageResolver } from '../resolvers/page.resolver';
import { DocsEditorComponent } from './pages-editor/pages-editor.component';
import { DocsPreviewerComponent } from './pages-previewer/pages-previewer.component';
import { DocsTableComponent } from './pages-table/pages-table.component';

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
      previewer: PageResolver
    }
  }, {
    path: 'editar/:slug', 
    component: DocsEditorComponent,
    resolve: {
      previewer: PageResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule { }