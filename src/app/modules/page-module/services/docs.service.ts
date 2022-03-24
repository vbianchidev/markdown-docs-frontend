import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/app/core/config/base.config';

import { Doc } from '../../../core/interfaces/docs.interface';
import { GenericService } from '../../../core/services/http/generic.service';


@Injectable({
  providedIn: 'root'
})
export class DocsService extends GenericService<Doc> {
  public override api: string = BASE_URL + "page/";

  constructor(private http: HttpClient) { 
    super(http);
  }
}
