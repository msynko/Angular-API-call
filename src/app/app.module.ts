import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {

  MatIconModule, MatInputModule,
  MatAutocompleteModule,MatChipsModule,
  MatFormFieldModule


} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent
  ],
  imports: [
     AppRoutingModule,
     BrowserModule,
     BrowserAnimationsModule,
     HttpClientModule,
     FormsModule,
     ReactiveFormsModule,
     MatIconModule, MatInputModule,
     MatAutocompleteModule,
     MatChipsModule,
     MatFormFieldModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
