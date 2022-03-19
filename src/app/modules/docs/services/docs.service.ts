import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { makeUrlId } from 'src/app/core/helpers/url.helper';

import { Doc } from '../../../core/interfaces/docs.interface';


@Injectable({
  providedIn: 'root'
})
export class DocsService {
  private readonly _url: string = "http://localhost:3000/post"

  constructor(private http: HttpClient) { }

  getAll(): Observable<Doc[]> {
    return this.http.get<Doc[]>(this._url);
  }

  getById(id: string | null): Observable<Doc> {
    return this.http.get<Doc>(makeUrlId(this._url, id));
  }

  getBySlug(id: string | null): Observable<Doc> {
    return this.http.get<Doc>(makeUrlId(this._url, `find/${id}`));
  }
}
