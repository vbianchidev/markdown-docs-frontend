import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { delay, Observable, startWith } from 'rxjs';
import { Doc } from 'src/app/core/interfaces/docs.interface';
import { SidenavService } from 'src/app/core/services/ui/sidenav.service';
import { DocsService } from 'src/app/modules/page-module/services/docs.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, AfterViewInit {
  @Input()
  isHandset: boolean;

  @ViewChild('drawer') 
  public drawer!: MatSidenav;

  menus: Observable<Doc[]>;

  constructor(
    private sidenavService: SidenavService,
    private docsService: DocsService,
    private router: Router
  ) {
    this.menus = this.docsService.getAll();
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngAfterViewInit(): void {
    this.sidenavService.sidenavToggleSubject
      .pipe(
        startWith(null),
        delay(0)
      )
      .subscribe(()=> {
        this.drawer.toggle();
      });
    
    this.docsService.refreshMenuEvent
      .pipe(
        startWith(null),
        delay(0)
      )
      .subscribe(()=> {
        this.menus = this.docsService.getAll();
      });
  }
}
