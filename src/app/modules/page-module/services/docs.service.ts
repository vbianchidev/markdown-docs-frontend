import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Doc } from '../../../core/interfaces/docs.interface';
import { GenericService } from '../../../core/services/http/generic.service';


@Injectable({
  providedIn: 'root'
})
export class DocsService extends GenericService<Doc> {
  public override api: string = "http://localhost:3000/post/";

  constructor(private http: HttpClient) { 
    super(http);
  }
}
