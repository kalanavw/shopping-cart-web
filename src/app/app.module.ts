import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewItemComponent } from './pages/add-new-item/add-new-item.component';
import { HomeComponent } from './pages/home/home.component';
import {HttpService} from './config/http.service';
import { HeaderComponent } from './pages/shared/header/header.component';
import {AppConfig} from './config/app-config';
import {CartService} from './services/cart.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddNewItemComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpService,
    AppConfig,
    CartService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
