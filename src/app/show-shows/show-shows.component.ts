import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ShowService } from '../thd.service';

@Component({
  selector: 'app-show-shows',
  templateUrl: './show-shows.component.html',
  styleUrls: ['./show-shows.component.css']
})
export class ShowShowsComponent implements OnInit {
  route: ActivatedRoute;
  action: any;
  router: Router
  showService: ShowService
  id: any;
  name: String = "";
  image: String = "";
  flyer: String = "";
  price: String = "";
  location: String = "";
  timedate: String = "";
  message: String = "";

  constructor(route: ActivatedRoute, router: Router, showService: ShowService) {
    this.route = route;
    this.router = router
    this.action = this.router.url
    this.showService = showService
    this.name = this.showService.selectedShow.name
    this.image = this.showService.selectedShow.image
    this.flyer = this.showService.selectedShow.flyer
    this.price = this.showService.selectedShow.price
    this.location = this.showService.selectedShow.location
    this.timedate = this.showService.selectedShow.timedate
    this.message = this.showService.selectedShow.message
    this.id = this.showService.selectedShow._id
    console.log(this.name)
  }
  ngOnInit(): void {
  }

}
