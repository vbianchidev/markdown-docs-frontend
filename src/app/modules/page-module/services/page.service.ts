import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BASE_URL } from 'src/app/core/config/base.config';
import { GenericService } from 'src/app/core/services/http/generic.service';

import { Page } from '../interfaces/page.interface';

@Injectable({
  providedIn: 'root'
})
export class PageService extends GenericService<Page> {
  public override api: string = BASE_URL + 'page/';

  public refreshMenuEvent: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
    super(http);
  }

  public override delete(id: string) {
    this.http.delete(this.api + id).subscribe((response) => {
      console.log(response);
    });
    this.refresh();
  }

  public override create(data: Page): Observable<Page> {
    const page = this.http.post<Page>(this.api, data);
    this.refresh();
    return page;
  }

  public override update(id: string, data: Page): Observable<Page> {
    const page = this.http.patch<Page>(this.api + id, data);
    this.refresh();
    return page;
  }

  public refresh() {
    return this.refreshMenuEvent.next(null);
  }
}
