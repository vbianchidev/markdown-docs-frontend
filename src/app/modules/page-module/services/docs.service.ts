import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BASE_URL } from 'src/app/core/config/base.config';

import { Doc } from '../../../core/interfaces/docs.interface';


@Injectable({
  providedIn: 'root'
})
export class DocsService {
  public api: string = BASE_URL + "page/";

  public refreshMenuEvent: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private _http: HttpClient) { }

  public getAll(): Observable<Doc[]> {
    return this._http.get<Doc[]>(this.api);
  }

  public getOne(id: string): Observable<Doc> {
    return this._http.get<Doc>(this.api + id);
  }

  public delete(id: string) {
    this.refresh();
    this._http.delete(this.api+id).subscribe(response => { console.log(response)});
  }

  public create(data: Doc): Observable<Doc> {
    return this._http.post<Doc>(this.api, data)
  }

  public update(id: string, data: Doc): Observable<Doc>  {
    return this._http.patch<Doc>(this.api+id, data)
  }

  public refresh() {
    return this.refreshMenuEvent.next(null);
  } 
}
