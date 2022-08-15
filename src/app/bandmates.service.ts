import { Injectable , OnInit} from '@angular/core';
@Injectable({

  providedIn: 'root'
})
export class BandmatesService {
  url: any = "http://localhost:3000/bandmates/"
  bandmate: any = []
  selectedBandmate: any;

  async getBandmate(){
    const response: any = await fetch(this.url)
    const data: any = await response.json()
    this.bandmate = data
  }
  
  async createBandmate(newBandmate){
    await fetch(this.url,{
      method: "post",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newBandmate)
    })
    this.getBandmate()
  }

  async updateBandmate(updatedBandmate){
    await fetch(this.url+`/${updatedBandmate._id}`,{
      method: "put",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(updatedBandmate)
    })
    this.getBandmate()
  }

  async deleteBandmate(deletedBandmate){
    await fetch(this.url+`/${deletedBandmate._id}`,{
      method: "delete",
    })
    this.getBandmate()
  }

}
