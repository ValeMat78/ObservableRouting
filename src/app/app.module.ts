import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { MaterialModule } from './shared/material.module';
import { MatlistLibriComponent } from './matlist-libri/matlist-libri.component';
import { MatcardLibroComponent } from './matcard-libro/matcard-libro.component';
import { ProvaInputComponent } from './prova-input/prova-input.component';
import { LibroComponent } from './libro/libro.component';
import { AutoriComponent } from './autori/autori.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    MatlistLibriComponent,
    MatcardLibroComponent,
    ProvaInputComponent,
    LibroComponent,
    AutoriComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    MaterialModule,
    FormsModule,HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
