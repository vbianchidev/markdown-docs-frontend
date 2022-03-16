import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/core/interfaces/post.interface';

import { PostService } from '../../core/services/previewer.service';

@Injectable({
  providedIn: 'root'
})
export class PreviewerResolver implements Resolve<Post> {

  constructor(private postService: PostService) {}

  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): Observable<Post> | Promise<Post> | Post {
    console.log(route.paramMap.get('slug'))
    return this.postService.getBySlug(route.paramMap.get('slug'));
  }
}
