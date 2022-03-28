import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestsupdateserviceService {

  constructor(private http: HttpClient) { }
  url1="http://localhost:3333/api/therapies";
  url2="http://localhost:3333/api/updatetherapies";
  //for dropdown
  getApi(){
    return this.http.get("http://localhost:3333/api/therapies");
  }

  getCurrentProductData(_id:any){
    return this.http.get(`${this.url1}/${_id}`)
  }

  updateData(_id:any,data:{}){
    return this.http.put(`${this.url2}/${_id}`,data)
  }
}
