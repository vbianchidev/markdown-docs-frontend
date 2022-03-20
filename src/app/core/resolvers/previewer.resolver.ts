import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Doc } from 'src/app/core/interfaces/docs.interface';
import { DocsService } from 'src/app/core/services/http/docs.service';


@Injectable({
  providedIn: 'root'
})
export class PreviewerResolver implements Resolve<Doc> {

  constructor(private docsService: DocsService) {}

  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): Observable<Doc> | Promise<Doc> | Doc {
    return this.docsService.getOne(route.paramMap.get('slug'));
  }
}
