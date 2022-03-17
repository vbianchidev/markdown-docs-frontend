import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable, startWith } from 'rxjs';
import { SidenavService } from 'src/app/core/services/ui/sidenav.service';

@Component({
  selector: 'app-menu',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class MenuComponent implements AfterViewInit {
  @Input()
  isHandset$?: Observable<boolean>;

  @ViewChild('sidenav') 
  sidenav: MatSidenav;

  constructor(private sidenavService: SidenavService) { }

  ngAfterViewInit() {
    this.sidenavService.sideNavToggleSubject
      .pipe(startWith(null))
      .subscribe(()=> {
        this.sidenav.toggle();
      });
  } 
}
