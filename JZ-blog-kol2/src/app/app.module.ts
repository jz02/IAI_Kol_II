import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {DataService} from "./services/jz-data.service";
import { BlogComponent } from './components/blog/blog.component';
import {HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  HttpClientModule
  ],


  providers: [
     DataService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
