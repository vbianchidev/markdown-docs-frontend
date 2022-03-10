import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/homepage/homepage-routing.module').then(r => r.HomepageRoutingModule)
  }, {
    path: 'editar',
    loadChildren: () => import('./pages/editor/editor-routing.module').then(r => r.EditorRoutingModule)
  }, {
    path: 'visualizar',
    loadChildren: () => import('./pages/previewer/previewer-routing.module').then(r => r.PreviewerRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
