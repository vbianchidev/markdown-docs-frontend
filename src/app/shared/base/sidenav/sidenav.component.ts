import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, startWith } from 'rxjs';
import { Menu } from 'src/app/core/interfaces/menu.interface';
import { MenuService } from 'src/app/core/services/http/menu.service';
import { SidenavService } from 'src/app/core/services/ui/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class MenuComponent implements AfterViewInit {
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
