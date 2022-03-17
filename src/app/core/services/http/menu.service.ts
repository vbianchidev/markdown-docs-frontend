import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Menu } from '../../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private readonly _url: string = "http://localhost:3000/menu";

  constructor(private http: HttpClient) { }

  getMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this._url);
  }
}
