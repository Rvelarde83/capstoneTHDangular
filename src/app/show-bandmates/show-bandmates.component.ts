import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BandmatesService } from '../bandmates.service';
@Component({
  selector: 'app-show-bandmates',
  templateUrl: './show-bandmates.component.html',
  styleUrls: ['./show-bandmates.component.css']
})
export class ShowBandmatesComponent implements OnInit {
  route: ActivatedRoute;
  action: any;
  router: Router
  bandmatesService: BandmatesService
  id: any;
  name: String = "";
  image: String = "";
  instrument: String = "";
  notes: String = "";


  constructor(route: ActivatedRoute, router: Router, BandmatesService: BandmatesService) {
    this.route = route;
    this.router = router
    this.action = this.router.url
    this.bandmatesService = BandmatesService
    this.name = this.bandmatesService.selectedBandmate.name
    this.image = this.bandmatesService.selectedBandmate.image
    this.instrument = this.bandmatesService.selectedBandmate.instrument
    this.notes = this.bandmatesService.selectedBandmate.notes

    this.id = this.bandmatesService.selectedBandmate._id
    console.log(this.name)
  }
  ngOnInit(): void {
  }

}
