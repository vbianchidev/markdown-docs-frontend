import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Page } from 'src/app/core/interfaces/page.interface';

import { DocsService } from '../../modules/markdown/services/docs.service';

@Injectable({
  providedIn: 'root'
})
export class PreviewerResolver implements Resolve<Page> {

  constructor(private pageService: DocsService) {}

  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): Observable<Page> | Promise<Page> | Page {
    return this.pageService.getBySlug(route.paramMap.get('slug'));
  }
}
