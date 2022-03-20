import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from 'src/app/shared/layout/layout.module';

import { HomeComponent } from './pages/home/home.component';
import { HomepageRoutingModule } from './pages/homepage-routing.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutsModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
