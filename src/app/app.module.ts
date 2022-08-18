import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainSiteComponent } from './main-site/main-site.component';
import { ShowsDisplayComponent } from './shows-display/shows-display.component';
import { FormShowsComponent } from './form-shows/form-shows.component';
import { FormsModule } from '@angular/forms';
import { PhotosDisplayComponent } from './photos-display/photos-display.component';
import { FormPhotosComponent } from './form-photos/form-photos.component';
import { FormBandmatesComponent } from './form-bandmates/form-bandmates.component';
import { LoginComponent } from './login/login.component';
import { AUTH_PROVIDERS } from './auth.service';
import { LoggedInGuard } from './logged-in.guard';
import { BandmatesDisplayComponent } from './bandmates-display/bandmates-display.component';
import { ShowShowsComponent } from './show-shows/show-shows.component';
import { ShowPhotosComponent } from './show-photos/show-photos.component';
import { ShowBandmatesComponent } from './show-bandmates/show-bandmates.component';
    
@NgModule({
  declarations: [
    AppComponent,
    MainSiteComponent,
    ShowsDisplayComponent,
    FormShowsComponent,
    PhotosDisplayComponent,
    FormPhotosComponent,
    FormBandmatesComponent,
    LoginComponent,
    BandmatesDisplayComponent,
    ShowShowsComponent,
    ShowPhotosComponent,
    ShowBandmatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [ AUTH_PROVIDERS,
    LoggedInGuard],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
