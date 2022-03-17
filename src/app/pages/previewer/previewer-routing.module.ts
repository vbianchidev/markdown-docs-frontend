import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PreviewerComponent } from "./previewer.component";
import { PostResolver } from "../../core/resolvers/previewer.resolver";

const routes: Routes = [
  { 
    path: ':slug', 
    component: PreviewerComponent,
    resolve: {
      previewer: PostResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreviewerRoutingModule { }