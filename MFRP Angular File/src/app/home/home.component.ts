import { Component, OnInit } from '@angular/core';
import { ExcellenceService } from '../excellence.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Pdtdata } from '../pdtdata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public response: Observable<Pdtdata[]>
  public sampleData1 :any=[];
  constructor(private pdtservice: ExcellenceService, private http: HttpClient, private router: ActivatedRoute) { 
    this.response = this.pdtservice.fetchAPI();
    this.pdtservice.getapi().subscribe(data => {
      this.sampleData1 = data;
    })
  }
  visible:boolean = false;
visible1:boolean = false;
visible2:boolean = false;
visible3:boolean = false;
visible4:boolean = false;
visible5:boolean = false;
visible6:boolean = false;



ReadMore:boolean =true;
MoreInfo: boolean = true;


ngOnInit(): void {
}

onclick(){
this.ReadMore = !this.ReadMore;

this.visible = !this.visible
}


onclick1(){
this.ReadMore = !this.ReadMore;

this.visible1 = !this.visible1;
}

onclick2(){
this.ReadMore = !this.ReadMore;

this.visible2 = !this.visible2;
}
onclick3(){
this.ReadMore = !this.ReadMore;

this.visible3 = !this.visible3;
}

onclick4(){
this.ReadMore = !this.ReadMore;

this.visible4 = !this.visible4;
}
onclick5(){
this.ReadMore = !this.ReadMore;

this.visible5 = !this.visible5;
}
onclick6(){
this.ReadMore = !this.ReadMore;

this.visible6 = !this.visible6;
}


}
