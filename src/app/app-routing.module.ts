import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatatablebsComponent } from './modules/docs/pages/datatablebs/datatablebs.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/pages/homepage-routing.module').then(r => r.HomepageRoutingModule)
  }, {
    path: 'docs',
    loadChildren: () => import('./modules/docs/pages/docs-routing.module').then(r => r.PreviewerRoutingModule)
  }, 
  {
    path: 'teste',
    component: DatatablebsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
