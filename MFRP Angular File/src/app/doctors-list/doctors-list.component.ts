import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DoctorslistserviceService } from './doctorslistservice.service';
@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class DoctorsListComponent implements OnInit {
  sampleData:any=[];
  constructor(private service:DoctorslistserviceService , private http:HttpClient , private router: ActivatedRoute) { 
    this.service.getapi().subscribe(data => {
      this.sampleData = data;
    })
  }

  ngOnInit() {
  }

}
