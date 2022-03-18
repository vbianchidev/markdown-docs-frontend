import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/homepage/pages/homepage-routing.module').then(r => r.HomepageRoutingModule)
  }, {
    path: 'editar',
    loadChildren: () => import('./modules/editor/pages/editor-routing.module').then(r => r.EditorRoutingModule)
  }, {
    path: 'visualizar',
    loadChildren: () => import('./modules/previewer/pages/previewer-routing.module').then(r => r.PreviewerRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
