import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestseditserviceService {

  url1="http://localhost:3333/api/therapies";
  constructor(private http: HttpClient) { }
  getapi(){
    return this.http.get(this.url1)
  }
}
