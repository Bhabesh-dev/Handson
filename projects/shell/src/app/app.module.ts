import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderHostComponent } from './header-host/header-host.component';

@NgModule({
  declarations: [AppComponent, HeaderHostComponent],
  imports: [BrowserModule, BrowserAnimationsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
