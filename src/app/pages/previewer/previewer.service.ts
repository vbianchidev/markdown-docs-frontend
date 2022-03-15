import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { makeUrlId } from 'src/app/core/helpers/url.helper';

import { PreviewerComponent } from './previewer.component';


@Injectable({
  providedIn: 'root'
})
export class PreviewerService {

  private readonly _url: string = "http://localhost:3000/Markdowns"

  constructor(private http: HttpClient) { }

  public getOneMarkdown(id: number): Observable<any> {
    return this.http.get(makeUrlId(this._url, id));
  }

}
