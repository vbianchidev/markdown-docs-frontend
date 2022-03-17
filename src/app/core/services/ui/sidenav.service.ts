import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  public sidenavToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  public toggle() {
    return this.sidenavToggleSubject.next(null);
  } 
}
