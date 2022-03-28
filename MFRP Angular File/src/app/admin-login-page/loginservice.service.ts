import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  url1="http://localhost:4444/api/login";
  constructor(private http: HttpClient) { }
  getapi(){
    return this.http.get(this.url1)
  }
}
