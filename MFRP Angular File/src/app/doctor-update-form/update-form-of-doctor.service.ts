import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UpdateFormOfDoctorService {

  url1="http://localhost:1111/api/doctors";
  url2="http://localhost:1111/api/updatedoctor"
  constructor(private http: HttpClient) { }
  getapi(){
    return this.http.get(this.url1)
  }
  getCurrentProductData(_id:any){
    return this.http.get(`${this.url1}/${_id}`)
  }
  updateData(_id:any,data:{}){
    return this.http.put(`${this.url2}/${_id}`,data)
  }
}
