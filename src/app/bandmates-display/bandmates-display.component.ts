import { Component, OnInit } from '@angular/core';
import { BandmatesService } from '../bandmates.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bandmates-display',
  templateUrl: './bandmates-display.component.html',
  styleUrls: ['./bandmates-display.component.css']
})
export class BandmatesDisplayComponent implements OnInit {
  bandmatesService: BandmatesService;
  router: Router;
  constructor(bandmatesService: BandmatesService, router: Router) {
    this.bandmatesService = bandmatesService;
    this.router = router;
  }

  ngOnInit(): void {
    this.bandmatesService.getBandmate();
  }

  selectedBandmate(bandmate) {
    this.bandmatesService.selectedBandmate = bandmate;
    this.router.navigate(['bandmates/edit']);
  }
}