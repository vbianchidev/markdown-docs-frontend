import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/homepage/pages/homepage-routing.module').then(r => r.HomepageRoutingModule)
  }, {
    path: 'docs',
    loadChildren: () => import('./modules/previewer/pages/markdown-routing.module').then(r => r.PreviewerRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
