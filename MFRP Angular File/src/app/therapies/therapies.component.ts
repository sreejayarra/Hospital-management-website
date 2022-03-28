import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { TestsServiceService } from './tests-service.service';
@Component({
  selector: 'app-therapies',
  templateUrl: './therapies.component.html',
  styleUrls: ['./therapies.component.css']
})
export class TherapiesComponent implements OnInit {
  public sampleData1:any=[];
  constructor(private pdtservice: TestsServiceService, private http: HttpClient, private router: ActivatedRoute) { 
    this.pdtservice.getapi().subscribe(data => {
      this.sampleData1 = data;
    })
  }

  ngOnInit(): void {
  }

}
