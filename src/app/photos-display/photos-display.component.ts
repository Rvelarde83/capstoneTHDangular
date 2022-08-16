import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photos-display',
  templateUrl: './photos-display.component.html',
  styleUrls: ['./photos-display.component.css']
})
export class PhotosDisplayComponent implements OnInit {
  photosService: PhotosService;
  router: Router;
  constructor(photosService: PhotosService, router: Router) {
    this.photosService = photosService;
    this.router = router;
  }

  ngOnInit(): void {
    this.photosService.getPhoto();
  }

  selectedPhoto(photo) {
    this.photosService.selectedPhoto = photo;
    this.router.navigate(['photos/edit']);
  }
  showPhoto(photo) {
    this.photosService.selectedPhoto = photo;
    this.router.navigate([`photos/${photo._id}`]);
}
}