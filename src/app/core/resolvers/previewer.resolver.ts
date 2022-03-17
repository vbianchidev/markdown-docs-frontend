import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Page } from 'src/app/core/interfaces/page.interface';

import { PageService } from '../services/http/page.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<Page> {

  constructor(private postService: PageService) {}

  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): Observable<Page> | Promise<Page> | Page {
    console.log(route.paramMap.get('slug'))
    return this.postService.getBySlug(route.paramMap.get('slug'));
  }
}
