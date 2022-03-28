import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppointmentdataService {
  url1="http://localhost:2222/api/appointment";
  url2="http://localhost:2222/api/deleteappointment";
  constructor(private http: HttpClient) { }
  getApi(){
    return this.http.get(this.url1);
  }
  deleteProduct(_id:any){
    return this.http.delete(`${this.url2}/${_id}`)
  }
  getCurrentPatientData(_id:any){
    return this.http.get(`${this.url1}/${_id}`)
  }
}
