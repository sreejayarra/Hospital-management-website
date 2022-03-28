import { Component, OnInit } from '@angular/core';
import { FormServiceService } from './form-service.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.css']
})
export class FormTableComponent implements OnInit {

  // for dropdown
  public sampleData2:any=[];
 
  //formcontrol for pushing the existing values into the update form
  editEmp=new FormGroup ({
    _id:new FormControl(''),
    name:new FormControl(''),
    PhoneNumber:new FormControl(''),
    date:new FormControl(''),
    specialization:new FormControl(''),
    doctorName:new FormControl(''),
    timeSlot:new FormControl(''),
  })


  constructor(private pdtservice: FormServiceService, private http: HttpClient, private router: ActivatedRoute, private _router: Router) { 
    this.pdtservice.getApi().subscribe(data => {
      this.sampleData2 = data;
       
    })
  }

  //for getting value from dropdown

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
  ngOnInit(){
    this.pdtservice.getCurrentProductData(this.router.snapshot.params['_id']).subscribe((result:any)=>{
      this.editEmp=new FormGroup({
        _id:new FormControl(result['_id']),
        name:new FormControl(result['name']),
        PhoneNumber:new FormControl(result['PhoneNumber']),
        date:new FormControl(result['date']),
        specialization:new FormControl(result['specialization']),
        doctorName:new FormControl(result['doctorName']),
        timeSlot:new FormControl(result['timeSlot']),
      })
    })
  }


  // on submit for update
  submission(){
    console.warn(this.editEmp.value);
    this.pdtservice.updateData(this.router.snapshot.params['_id'],this.editEmp.value,).subscribe((result)=>{console.warn(result)})
    Swal.fire({
      title: 'Update successfull',
      text:'please go back to appointment page to check updated result by PHONE NUMBER',
      icon:'success',
      showCancelButton:true,
      confirmButtonText:'APPOINTMENT PAGE',
      cancelButtonText:'NO , KEEP IT'
    }).then((result)=>{
      if (result.value){
        this._router.navigate(["/appointment"]);
      } else if(result.dismiss === Swal.DismissReason.cancel){
        
      }
    })
   }

}
