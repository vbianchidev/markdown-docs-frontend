import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Menu } from '../../interfaces/menu.interface';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends GenericService<Menu> {
  public override api: string = "http://localhost:3000/menu";

  constructor(private http: HttpClient) { 
    super(http);
  }
}
