import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'layout-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  constructor(private breakpointObserver: BreakpointObserver) {}
}
