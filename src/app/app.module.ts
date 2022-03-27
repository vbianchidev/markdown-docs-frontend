import { HttpClient } from '@angular/common/http';
import { NgModule, SecurityContext } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { markedOptionsFactory } from './core/config/markedjs.config';
import { ModulesModule } from './modules/modules.module';
import { LayoutsModule } from './shared/layout/layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory
      }
    }),
    BrowserModule,
    LayoutsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModulesModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
