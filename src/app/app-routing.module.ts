import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home-module/pages/homepage-routing.module')
      .then(r => r.HomeRoutingModule)
  }, {
    path: 'docs',
    loadChildren: () => import('./modules/page-module/pages/docs-routing.module')
      .then(r => r.DocsRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
