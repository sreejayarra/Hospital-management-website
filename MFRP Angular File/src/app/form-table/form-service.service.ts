import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor(private http: HttpClient) { }
  url1="http://localhost:2222/api/appointment";
  url2="http://localhost:2222/api/updateAppointment";
  //for dropdown
  getApi(){
    return this.http.get("http://localhost:1111/api/doctors");
  }

  getCurrentProductData(_id:any){
    return this.http.get(`${this.url1}/${_id}`)
  }

  updateData(_id:any,data:{}){
    return this.http.put(`${this.url2}/${_id}`,data)
  }
}
