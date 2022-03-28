import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Pdtdata } from '../pdtdata';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { AppointApiService } from './appoint-api.service';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  public sampleData2: any = [];
  public sampledata4: any = [];

  constructor(private pdtservice: AppointApiService, private http: HttpClient, private router: ActivatedRoute,private _router: Router) {
    this.pdtservice.getApi().subscribe(data => {
      this.sampleData2 = data;

    })

  }
  elseText1:string="";
  bow: boolean = false;
  how: boolean = false;
  elseText: string = "";
  selectedDay: string = '';
  selectedDay1: string = '';
  selectChangeHandler(event: any) {
    this.selectedDay = event.target.value;
    console.warn(this.selectedDay);
  }
  selectChangeHandler1(event: any) {
    this.selectedDay1 = event.target.value;
    console.warn(this.selectedDay1)
  }
  ngOnInit() {

  }

  onSubmit(data: any) {
    this.http.post('http://localhost:2222/api/appointment', data)
      .subscribe((result) => {
        Swal.fire({
          title: 'appointment Booked',
          text:'your appointment is successfully booked . please try to reach before 15min',
          icon:'success',
          showCancelButton:true,
          confirmButtonText:'OK ! Go to Home Page',
          cancelButtonText:'NO , I want to Update'
        }).then((result)=>{
          if (result.value){
            this._router.navigate(["/home"]);
          } else if(result.dismiss === Swal.DismissReason.cancel){
            this._router.navigate(["/appointment"])
          }
        })

      })

  }
  get(val: string) {
    if (val == "") {
      this.how = !this.how;
      this.elseText = "please enter the phoneNumber"
    }
    else {
      this.pdtservice.getMainApi().subscribe((data: any) => {
        // this.data=data;
        //console.log(data);
        if(val){
          for (let i = 0; i < data.length; i++) {
            if (val == data[i].PhoneNumber) {
              //console.warn(data[i]._id)
              this.pdtservice.getCurrentPatientData(data[i]._id).subscribe((result: any) => {
                //console.warn(result);
                this.sampledata4.push(result);
                this.bow=!this.bow;
              })
            }
            
          }
        }
        else{
          this.bow=false;
          }
        }
        
      )

      this.sampledata4 = [];

    }
    //console.warn(val);

  }


}
