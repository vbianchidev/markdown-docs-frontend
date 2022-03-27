import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class GenericService<T> {
  public api: string;

  constructor(private _http: HttpClient) {}

  public getAll(): Observable<T[]> {
    return this._http.get<T[]>(this.api);
  }

  public getOne(id: string): Observable<T> {
    return this._http.get<T>(this.api + id);
  }

  public delete(id: string) {
    this._http.delete(this.api + id).subscribe((response) => {
      console.log(response);
    });
  }

  public create(data: T): Observable<T> {
    return this._http.post<T>(this.api, data);
  }

  public update(id: string, data: T): Observable<T> {
    return this._http.patch<T>(this.api + id, data);
  }
}
