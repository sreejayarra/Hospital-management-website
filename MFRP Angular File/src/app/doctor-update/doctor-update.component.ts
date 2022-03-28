import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DoctorServiceService } from './doctor-service.service';
@Component({
  selector: 'app-doctor-update',
  templateUrl: './doctor-update.component.html',
  styleUrls: ['./doctor-update.component.css']
})
export class DoctorUpdateComponent implements OnInit {

  sampleData:any=[];
  constructor(private service: DoctorServiceService, private http:HttpClient , private router: ActivatedRoute) { 
    this.service.getapi().subscribe(data => {
      this.sampleData = data;
    })
  }

  ngOnInit(): void {
  }

}
