import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PhotosService } from '../photos.service'; 
@Component({
  selector: 'app-show-photos',
  templateUrl: './show-photos.component.html',
  styleUrls: ['./show-photos.component.css']
})
export class ShowPhotosComponent implements OnInit {

  route: ActivatedRoute;
  action: any;
  router: Router
  photosService: PhotosService
  id: any;
  title: String = "";
  image: String = "";
 

  constructor(route: ActivatedRoute, router: Router, PhotosService: PhotosService) {
    this.route = route;
    this.router = router
    this.action = this.router.url
    this.photosService = PhotosService
    this.title = this.photosService.selectedPhoto.title
    this.image = this.photosService.selectedPhoto.image


    this.id = this.photosService.selectedPhoto._id
    console.log(this.title)
  }
  ngOnInit(): void {

  }

}