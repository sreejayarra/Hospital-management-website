import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppointApiService {

  url1="http://localhost:2222/api/appointment";
  constructor(private http: HttpClient) { }
  // get sampledata for doctors and dropdown
  getApi(){
    return this.http.get("http://localhost:1111/api/doctors");
  }

  // get main api for appointment
  getMainApi(){
    return this.http.get("http://localhost:2222/api/appointment")
  }

  // to get particular details
  getCurrentPatientData(_id:any){
    return this.http.get(`${this.url1}/${_id}`)
  }
}
