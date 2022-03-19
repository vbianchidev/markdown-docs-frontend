import { Component, Input } from '@angular/core';
import { SidenavService } from 'src/app/core/services/ui/sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input()
  isHandset?: boolean;

  constructor(private sideNavService: SidenavService) {}

  toogleSidenav() { 
    this.sideNavService.toggle();
  }
}
