import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DoctorslistserviceService {
  url1="http://localhost:1111/api/doctors";
  constructor(private http: HttpClient) { }
  getapi(){
    return this.http.get(this.url1)
  }
  getCurrentProductData(_id:any){
    return this.http.get(`${this.url1}/${_id}`)
  }
}
