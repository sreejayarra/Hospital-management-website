import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import { ExcellenceService } from '../excellence.service';
@Component({
  selector: 'app-specilization',
  templateUrl: './specilization.component.html',
  styleUrls: ['./specilization.component.css']
})
export class SpecilizationComponent implements OnInit {

  public sampleData: any[] = [];
  constructor(private pdtservice: ExcellenceService,private http:HttpClient, private router:ActivatedRoute) { }

  ngOnInit(){
    this.pdtservice.getCurrentProductData(this.router.snapshot.params['_id']).subscribe((result:any)=>{
      // console.warn(result);
      this.sampleData.push(result);
      console.warn(this.sampleData)
    })
  }

}
