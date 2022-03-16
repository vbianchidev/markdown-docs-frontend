import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { makeUrlId } from 'src/app/core/helpers/url.helper';

import { Post } from '../interfaces/post.interface';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly _url: string = "http://localhost:3000/post"

  constructor(private http: HttpClient) { }

  public getBySlug(id: string | null): Observable<Post> {
    return this.http.get<Post>(makeUrlId(this._url, `find/${id}`));
  }
}
