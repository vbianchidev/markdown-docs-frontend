import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeModule } from './home-module/home.module';
import { PageModule } from './page-module/page.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PageModule, HomeModule]
})
export class ModulesModule {}
