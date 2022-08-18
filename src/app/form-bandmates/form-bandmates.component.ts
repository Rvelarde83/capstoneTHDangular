import { Component, OnInit } from '@angular/core';
import { BandmatesService } from '../bandmates.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-form-bandmates',
  templateUrl: './form-bandmates.component.html',
  styleUrls: ['./form-bandmates.component.css']
})
export class FormBandmatesComponent implements OnInit {
  route: ActivatedRoute;
  action: any;
  router: Router
  bandmatesService: BandmatesService
  id: any;
  name: String = "";
  image: String = "";
  instrument: String = "";
  notes: String = "";


  constructor(route: ActivatedRoute, router: Router, bandmatesService: BandmatesService) {
    this.route = route;
    this.router = router
    this.action = this.router.url
    this.bandmatesService = bandmatesService

    if (this.action === "/bandmates/edit") {
      this.name = this.bandmatesService.selectedBandmate.name
      this.image = this.bandmatesService.selectedBandmate.image
      this.instrument = this.bandmatesService.selectedBandmate.instrument
      this.notes = this.bandmatesService.selectedBandmate.notes
     
      this.id = this.bandmatesService.selectedBandmate._id
    }
  }

  handleSubmit() {

    const bandmates: any = { name: this.name, image: this.image, instrument: this.instrument, notes: this.notes }

    if (this.action === "/bandmates/create") {
      this.bandmatesService.createBandmate(bandmates)
      this.name = ""
      this.image = ""
      this.instrument = ""
      this.notes = ""

      this.router.navigate(["/bandmates"])
    }

    if (this.action === "/bandmates/edit") {
      bandmates._id = this.id
      this.bandmatesService.updateBandmate(bandmates)
      this.name = ""
      this.image = ""
      this.instrument = ""
      this.notes = ""

      this.router.navigate(["/bandmates"])
    }
  }

  ngOnInit(): void { }
}