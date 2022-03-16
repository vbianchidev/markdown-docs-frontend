import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PreviewerComponent } from "./previewer.component";
import { PreviewerResolver } from "./previewer.resolver";

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