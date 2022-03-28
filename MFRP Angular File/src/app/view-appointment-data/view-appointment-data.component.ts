import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AppointmentdataService } from './appointmentdata.service';

@Component({
  selector: 'app-view-appointment-data',
  templateUrl: './view-appointment-data.component.html',
  styleUrls: ['./view-appointment-data.component.css']
})
export class ViewAppointmentDataComponent implements OnInit {
  public sampleData1:any=[];
  reverse:boolean=false;
  constructor(private pdtservice: AppointmentdataService, private http: HttpClient, private router: ActivatedRoute) {
    this.pdtservice.getApi().subscribe(data => {
      this.sampleData1 = data;

    })
   }

   deleteProduct(_id: any) {

    this.pdtservice.deleteProduct(_id).subscribe((result: any) => {
      console.warn('result', result)
      this.pdtservice.getApi().subscribe((data: any) => {
        this.sampleData1 = data;
      })
    })
  }
  get(val: string,val1:String) {
    if (val === "") {
      this.pdtservice.getApi().subscribe(data => {
        this.sampleData1 = data;
      })
    }
    else {
      this.pdtservice.getApi().subscribe((data: any) => {
        // this.data=data;
        //console.log(data);
        if(val){
          for (let i = 0; i < data.length; i++) {
            if (val == data[i].doctorName && val1 == data[i].date) {
              //console.warn(data[i]._id)
              this.pdtservice.getCurrentPatientData(data[i]._id).subscribe((result: any) => {
                //console.warn(result);
                this.sampleData1.push(result);
              })
            }
            
          }
        }
        }
        
      )

      this.sampleData1 = [];

    }
    //console.warn(val);

  }
 sortName(property:any){
   this.reverse = !this.reverse;

   let direction = this.reverse ? 1:-1;
   this.sampleData1.sort(function(a:any,b:any):any{
    if(a[property] < b[property]){
      return -1 * direction;
    }
    else if(a[property] > b[property]){
      return 1  * direction;
    }
    else{
      return 0;
    }
   })
 }
 sortDoctorName(property:any){
  this.reverse = !this.reverse;

  let direction = this.reverse ? 1:-1;
  this.sampleData1.sort(function(a:any,b:any):any{
   if(a[property] < b[property]){
     return -1 * direction;
   }
   else if(a[property] > b[property]){
     return 1  * direction;
   }
   else{
     return 0;
   }
  })
}
sortspecialization(property:any){
  this.reverse = !this.reverse;

  let direction = this.reverse ? 1:-1;
  this.sampleData1.sort(function(a:any,b:any):any{
   if(a[property] < b[property]){
     return -1 * direction;
   }
   else if(a[property] > b[property]){
     return 1  * direction;
   }
   else{
     return 0;
   }
  })
}
  ngOnInit(): void {
  }

}
