import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ShowService } from '../thd.service';

@Component({
  selector: 'app-form-shows',
  templateUrl: './form-shows.component.html',
  styleUrls: ['./form-shows.component.css']
})
export class FormShowsComponent implements OnInit {
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

    if (this.action === "/shows/edit"){
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
  }

  handleSubmit(){

    const show: any = {name: this.name, image: this.image, flyer: this.flyer, price: this.price, location: this.location, timedate: this.timedate, message: this.message, }

    if (this.action === "/shows/create"){
      this.showService.createShow(show)
      this.name = ""
      this.image = ""
      this.flyer = ""
      this.price = ""
      this.location = ""
      this.timedate = ""
      this.message = ""
      this.router.navigate(["/shows"])
    }

    if (this.action === "/shows/edit"){
      show._id = this.id
      this.showService.updateShow(show)
      this.name = ""
      this.image = ""
      this.flyer = ""
      this.price = ""
      this.location = ""
      this.timedate = ""
      this.message = ""
      this.router.navigate(["/shows"])
    }
  }

  ngOnInit(): void {}
}