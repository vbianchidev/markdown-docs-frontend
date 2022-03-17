import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, Observable, startWith } from 'rxjs';
import { SidenavService } from 'src/app/core/services/ui/sidenav.service';

@Component({
  selector: 'app-menu',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class MenuComponent implements AfterViewInit {
  @Input()
  isHandset?: boolean;

  @ViewChild('sidenav') 
  sidenav: MatSidenav;

  constructor(private sidenavService: SidenavService) { }

  ngAfterViewInit() {
    this.sidenavService.sidenavToggleSubject
      .pipe(
        startWith(null),
        delay(0)
      )
      .subscribe(()=> {
        this.sidenav.toggle();
      });
  }

  opened() {}
}
