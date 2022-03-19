import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/pages/homepage-routing.module').then(r => r.HomepageRoutingModule)
  }, {
    path: 'docs',
    loadChildren: () => import('./modules/docs/pages/docs-routing.module').then(r => r.PreviewerRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
