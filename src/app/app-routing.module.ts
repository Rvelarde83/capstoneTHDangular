import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowsDisplayComponent } from './shows-display/shows-display.component';
import { FormShowsComponent } from './form-shows/form-shows.component';
import { MainSiteComponent } from './main-site/main-site.component';

const routes: Routes = [
  {path: "", component: MainSiteComponent},
  {path: "shows", component: ShowsDisplayComponent},
  {path: "create", component: FormShowsComponent},
  {path: "edit", component: FormShowsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
