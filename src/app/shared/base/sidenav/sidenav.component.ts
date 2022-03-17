import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { delay, map, Observable, startWith } from 'rxjs';
import { Menu } from 'src/app/core/interfaces/menu.interface';
import { MenuService } from 'src/app/core/services/http/menu.service';
import { SidenavService } from 'src/app/core/services/ui/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {
  @Input()
  isHandset: boolean;

  @ViewChild('drawer') 
  public drawer!: MatSidenav;

  menus: Menu[] = [];

  constructor(
    private sidenavService: SidenavService,
    private menuService: MenuService
  ) {
    this.menuService.getMenus()
      .subscribe(result => { 
        result.map(menu => this.menus.push(menu)) 
      });
  }

  ngOnInit(): void {
    
    console.log(this.menus)
  }

  ngAfterViewInit(): void {
    this.sidenavService.sidenavToggleSubject
      .pipe(
        startWith(null),
        delay(0)
      )
      .subscribe(()=> {
        this.drawer.open();
      });
  }
}
