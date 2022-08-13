import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainSiteComponent } from './main-site/main-site.component';
import { ShowsDisplayComponent } from './shows-display/shows-display.component';
import { FormShowsComponent } from './form-shows/form-shows.component';
import { FormsModule } from '@angular/forms';
    
@NgModule({
  declarations: [
    AppComponent,
    MainSiteComponent,
    ShowsDisplayComponent,
    FormShowsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
