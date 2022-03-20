import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { delay, startWith } from 'rxjs';
import { Menu } from 'src/app/core/interfaces/menu.interface';
import { MenuService } from 'src/app/core/services/http/menu.service';
import { SidenavService } from 'src/app/core/services/ui/sidenav.service';

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

  menus: Menu[] = [];

  constructor(
    private sidenavService: SidenavService,
    private menuService: MenuService,
    private router: Router
  ) {
    this.menuService.getAll()
      .subscribe(result => { 
        result.map(menu => this.menus.push(menu)) 
      });
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
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
  }
}
