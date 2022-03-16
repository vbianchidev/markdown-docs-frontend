import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, SecurityContext } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import { PostService } from '../../core/services/previewer.service';
import { PreviewerRoutingModule } from './previewer-routing.module';
import { PreviewerComponent } from './previewer.component';


@NgModule({
  declarations: [
    PreviewerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    PreviewerRoutingModule,
    MarkdownModule.forRoot({ loader: HttpClient,  sanitize: SecurityContext.NONE })
  ],
  providers: [
    PostService
  ]
})
export class PreviewerModule { }
