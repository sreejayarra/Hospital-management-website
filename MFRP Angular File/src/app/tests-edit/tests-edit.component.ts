import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { TestseditserviceService } from './testseditservice.service';
@Component({
  selector: 'app-tests-edit',
  templateUrl: './tests-edit.component.html',
  styleUrls: ['./tests-edit.component.css']
})
export class TestsEditComponent implements OnInit {

  public sampleData1:any=[];
  constructor(private pdtservice: TestseditserviceService, private http: HttpClient, private router: ActivatedRoute) { 
    this.pdtservice.getapi().subscribe(data => {
      this.sampleData1 = data;
    })
  }

  ngOnInit(): void {
  }

}
