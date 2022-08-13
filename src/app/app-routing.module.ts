import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowsDisplayComponent } from './shows-display/shows-display.component';
import { MainSiteComponent } from './main-site/main-site.component';
import { FormShowsComponent } from './form-shows/form-shows.component';
import { FormBandmatesComponent } from './form-bandmates/form-bandmates.component';
import { FormPhotosComponent } from './form-photos/form-photos.component';
import { PhotosDisplayComponent } from './photos-display/photos-display.component';

const routes: Routes = [
  {path: "", component: MainSiteComponent},
  {path: "shows", component: ShowsDisplayComponent},
  {path: "shows/create", component: FormShowsComponent},
  {path: "shows/edit", component: FormShowsComponent},
  {path: "photos", component: PhotosDisplayComponent},
  {path: "photos/create", component: FormPhotosComponent},
  {path: "photos/edit", component: FormPhotosComponent},
  {path: "bandmates/edit", component: FormBandmatesComponent},
  {path: "bandmates/create", component: FormBandmatesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
