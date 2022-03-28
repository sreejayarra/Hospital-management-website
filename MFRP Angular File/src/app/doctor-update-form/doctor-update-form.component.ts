import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UpdateFormOfDoctorService } from './update-form-of-doctor.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-doctor-update-form',
  templateUrl: './doctor-update-form.component.html',
  styleUrls: ['./doctor-update-form.component.css']
})
export class DoctorUpdateFormComponent implements OnInit {

  constructor(private pdtservice:UpdateFormOfDoctorService , private http: HttpClient, private router: ActivatedRoute, private _router: Router) { }
  editEmp2=new FormGroup ({
    _id:new FormControl(''),
    specialization:new FormControl(''),
    picture1:new FormControl(''),
    doctor1:new FormControl(''),
    picture2:new FormControl(''),
    doctor2:new FormControl(''),
    picture3:new FormControl(''),
    doctor3:new FormControl(''),
    picture4:new FormControl(''),
    doctor4:new FormControl(''),
    picture5:new FormControl(''),
    doctor5:new FormControl(''),
    __v:new FormControl('')
  })
  ngOnInit(){
    this.pdtservice.getCurrentProductData(this.router.snapshot.params['_id']).subscribe((result:any)=>{
      this.editEmp2=new FormGroup ({
        _id:new FormControl(result['_id']),
        specialization:new FormControl(result['specialization']),
        picture1:new FormControl(result['picture1']),
        doctor1:new FormControl(result['doctor1']),
        picture2:new FormControl(result['picture2']),
        doctor2:new FormControl(result['doctor2']),
        picture3:new FormControl(result['picture3']),
        doctor3:new FormControl(result['doctor3']),
        picture4:new FormControl(result['picture4']),
        doctor4:new FormControl(result['doctor4']),
        picture5:new FormControl(result['picture5']),
        doctor5:new FormControl(result['doctor5']),
        __v:new FormControl(result['__v'])
      })
    })
  }
  submission(){
    console.warn(this.editEmp2.value);
    this.pdtservice.updateData(this.router.snapshot.params['_id'],this.editEmp2.value,).subscribe((result)=>{console.warn(result)})
    Swal.fire({
      title: 'Update successfull',
      text:'please go back and check the updated details',
      icon:'success',
      showCancelButton:true,
      confirmButtonText:'go back to test page',
      cancelButtonText:'NO , KEEP IT'
    }).then((result)=>{
      if (result.value){
        this._router.navigate(["/doctorUpdate"]);
      } else if(result.dismiss === Swal.DismissReason.cancel){
        
      }
    })
   }
}
