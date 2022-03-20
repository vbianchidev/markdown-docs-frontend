import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Doc } from '../../interfaces/docs.interface';
import { GenericService } from './generic.service';


@Injectable({
  providedIn: 'root'
})
export class DocsService extends GenericService<Doc> {
  public override api: string = "http://localhost:3000/post/";

  constructor(private http: HttpClient) { 
    super(http);
  }
}
