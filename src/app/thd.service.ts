import { Injectable , OnInit} from '@angular/core';
@Injectable({

  providedIn: 'root'
})
export class ShowService {
  url: any = "http://localhost:3000/shows/"
  shows: any = []
  selectedShow: any;

  async getShow(){
    const response: any = await fetch(this.url)
    const data: any = await response.json()
    this.shows = data
  }
  
  async createShow(newShow){
    await fetch(this.url,{
      method: "post",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newShow)
    })
    this.getShow()
  }

  async updateShow(updatedShow){
    await fetch(this.url+`/${updatedShow._id}`,{
      method: "put",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(updatedShow)
    })
    this.getShow()
  }

  async deleteShow(deletedShow){
    await fetch(this.url+`/${deletedShow._id}`,{
      method: "delete",
    })
    this.getShow()
  }

}
