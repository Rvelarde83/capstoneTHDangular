import { Injectable , OnInit} from '@angular/core';
@Injectable({

  providedIn: 'root'
})
export class PhotosService {
  url: any = "https://thesehandsomedevilsbackendrv.herokuapp.com/photos/"
  photo: any = []
  selectedPhoto: any;

  async getPhoto(){
    const response: any = await fetch(this.url)
    const data: any = await response.json()
    this.photo = data
  }
  
  async createPhoto(newPhoto){
    await fetch(this.url,{
      method: "post",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newPhoto)
    })
    this.getPhoto()
  }

  async updatePhoto(updatedPhoto){
    await fetch(this.url+`/${updatedPhoto._id}`,{
      method: "put",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(updatedPhoto)
    })
    this.getPhoto()
  }

  async deletePhoto(deletedPhoto){
    await fetch(this.url+`/${deletedPhoto._id}`,{
      method: "delete",
    })
    this.getPhoto()
  }

}
