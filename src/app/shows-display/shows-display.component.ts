import { Component, OnInit } from '@angular/core';
import { ShowService } from '../thd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shows-display',
  templateUrl: './shows-display.component.html',
  styleUrls: ['./shows-display.component.css']
})
export class ShowsDisplayComponent implements OnInit {
  showService: ShowService;
  router: Router;
  constructor(showService: ShowService, router: Router) {
    this.showService = showService;
    this.router = router;
  }

  ngOnInit(): void {
    this.showService.getShow();
  }

  selectShow(show) {
    this.showService.selectedShow = show;
    this.router.navigate(['shows/edit']);
  }
}

