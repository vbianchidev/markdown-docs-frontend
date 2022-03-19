import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PreviewerResolver } from '../../../core/resolvers/previewer.resolver';
import { PreviewerComponent } from './markdown-previewer/markdown-previewer.component';

const routes: Routes = [
  { 
    path: ':slug', 
    component: PreviewerComponent,
    resolve: {
      previewer: PreviewerResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreviewerRoutingModule { }