import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowsDisplayComponent } from './shows-display/shows-display.component';
import { MainSiteComponent } from './main-site/main-site.component';
import { FormShowsComponent } from './form-shows/form-shows.component';
import { FormBandmatesComponent } from './form-bandmates/form-bandmates.component';
import { BandmatesDisplayComponent } from './bandmates-display/bandmates-display.component';
import { FormPhotosComponent } from './form-photos/form-photos.component';
import { PhotosDisplayComponent } from './photos-display/photos-display.component';
import { LoginComponent } from './login/login.component';
import { AUTH_PROVIDERS } from './auth.service';
import { LoggedInGuard } from './logged-in.guard';
import { ShowShowsComponent } from './show-shows/show-shows.component';
import { ShowBandmatesComponent } from './show-bandmates/show-bandmates.component';
import { ShowPhotosComponent } from './show-photos/show-photos.component';



const routes: Routes = [
  {path: "", component: MainSiteComponent},
  {path: "shows", component: ShowsDisplayComponent},
  {path: "shows/create", component: FormShowsComponent,  canActivate: [ LoggedInGuard ]},
  {path: "shows/edit", component: FormShowsComponent, },
  {path: "shows/:id", component: ShowShowsComponent, },
  {path: "photos", component: PhotosDisplayComponent},
  {path: "photos/edit", component: FormPhotosComponent, },
  {path: "photos/create", component: FormPhotosComponent,  },
  {path: "photos/:id", component: ShowPhotosComponent},
  {path: "bandmates", component: BandmatesDisplayComponent},
  {path: "bandmates/edit", component: FormBandmatesComponent,  canActivate: [ LoggedInGuard ]},
  {path: "bandmates/create", component: FormBandmatesComponent,  canActivate: [ LoggedInGuard ]},
  {path: "bandmates/:id", component: ShowBandmatesComponent, },
  {path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
