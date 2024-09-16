import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, NavBarComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule
  ]
})
export class AppModule { }
