import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Page } from 'src/app/modules/page-module/interfaces/page.interface';
import { PageService } from 'src/app/modules/page-module/services/page.service';


@Injectable({
  providedIn: 'root'
})
export class PageResolver implements Resolve<Page> {

  constructor(private docsService: PageService) {}

  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): Observable<Page> | Promise<Page> | Page {
    return this.docsService.getOne(route.paramMap.get('slug'));
  }
}
