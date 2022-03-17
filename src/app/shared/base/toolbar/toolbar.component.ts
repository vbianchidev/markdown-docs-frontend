import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { SidenavService } from 'src/app/core/services/ui/sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input()
  isHandset$?: Observable<boolean>;

  constructor(private sideNavService: SidenavService) {}

  toogleSidenav() { 
    this.sideNavService.toggle();
  }
}
