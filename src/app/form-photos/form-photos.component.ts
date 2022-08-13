import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-form-Photos',
  templateUrl: './form-Photos.component.html',
  styleUrls: ['./form-Photos.component.css']
})
export class FormPhotosComponent implements OnInit {
  route: ActivatedRoute;
  action: any;
  router: Router
  photosService: PhotosService
  id: any;
  title: String = "";
  image: String = "";


  constructor(route: ActivatedRoute, router: Router, photosService: PhotosService) {
    this.route = route;
    this.router = router
    this.action = this.router.url
    this.photosService = photosService

    if (this.action === "photos/edit") {
      this.title = this.photosService.selectedPhoto.name
      this.image = this.photosService.selectedPhoto.image
      
      this.id = this.photosService.selectedPhoto._id
    }
  }

  handleSubmit() {

    const photo: any = { name: this.title, image: this.image,  }

    if (this.action === "photos/create") {
      this.photosService.createPhoto(photo)
      this.title = ""
      this.image = ""

      this.router.navigate(["/photos"])
    }

    if (this.action === "photos/edit") {
      photo._id = this.id
      this.photosService.updatePhoto(photo)
      this.title = ""
      this.image = ""

      this.router.navigate(["photos"])
    }
  }

  ngOnInit(): void { }
}