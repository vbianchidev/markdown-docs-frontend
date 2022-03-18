import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreviewerResolver } from 'src/app/core/resolvers/previewer.resolver';

import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  {
    path: '', 
    component: TableComponent,
  }, { 
    path: ':slug', 
    component: FormComponent,
    resolve: {
      previewer: PreviewerResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }