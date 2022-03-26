import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BASE_URL } from 'src/app/core/config/base.config';

import { Page } from '../interfaces/page.interface';


@Injectable({
  providedIn: 'root'
})
export class PageService {
  public api: string = BASE_URL + "page/";

  public refreshMenuEvent: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private _http: HttpClient) { }

  public getAll(): Observable<Page[]> {
    return this._http.get<Page[]>(this.api);
  }

  public getOne(id: string): Observable<Page> {
    return this._http.get<Page>(this.api + id);
  }

  public delete(id: string) {
    this.refresh();
    this._http.delete(this.api+id).subscribe(response => { console.log(response)});
  }

  public create(data: Page): Observable<Page> {
    return this._http.post<Page>(this.api, data)
  }

  public update(id: string, data: Page): Observable<Page>  {
    return this._http.patch<Page>(this.api+id, data)
  }

  public refresh() {
    return this.refreshMenuEvent.next(null);
  } 
}
