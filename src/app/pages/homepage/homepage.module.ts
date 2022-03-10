import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { RouterModule } from '@angular/router';
import { HomepageRoutingModule } from './homepage-routing.module';



@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
