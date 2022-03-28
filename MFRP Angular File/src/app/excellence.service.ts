import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pdtdata } from './pdtdata';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExcellenceService {

  url1="http://localhost:1000/api/specialization"
  constructor(private http: HttpClient) { }
  public fetchAPI() : Observable<Pdtdata[]>
  {
    return this.http.get<Pdtdata[]>(this.url1);
  }
  getapi(){
    return this.http.get(this.url1)
  }
  getCurrentProductData(_id:any){
    return this.http.get(`${this.url1}/${_id}`)
  }
}
