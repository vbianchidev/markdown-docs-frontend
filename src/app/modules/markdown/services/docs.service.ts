import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { makeUrlId } from 'src/app/core/helpers/url.helper';

import { Page } from '../../../core/interfaces/page.interface';


@Injectable({
  providedIn: 'root'
})
export class DocsService {
  private readonly _url: string = "http://localhost:3000/post"

  constructor(private http: HttpClient) { }

  getBySlug(id: string | null): Observable<Page> {
    return this.http.get<Page>(makeUrlId(this._url, `find/${id}`));
  }
}
