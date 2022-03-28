import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TestsupdateserviceService } from './testsupdateservice.service';
@Component({
  selector: 'app-test-form-edit',
  templateUrl: './test-form-edit.component.html',
  styleUrls: ['./test-form-edit.component.css']
})
export class TestFormEditComponent implements OnInit {
  public sampleData2:any=[];
  editEmp1=new FormGroup ({
    _id:new FormControl(''),
    test:new FormControl(''),
    price:new FormControl(''),
    __v:new FormControl('')
  })
  constructor(private pdtservice:TestsupdateserviceService , private http: HttpClient, private router: ActivatedRoute, private _router: Router) { 
    this.pdtservice.getApi().subscribe(data => {
      this.sampleData2 = data;
       
    })
  }

  ngOnInit(){
    this.pdtservice.getCurrentProductData(this.router.snapshot.params['_id']).subscribe((result:any)=>{
      this.editEmp1=new FormGroup({
        _id:new FormControl(result['_id']),
        test:new FormControl(result['test']),
        price:new FormControl(result['price']),
        __v:new FormControl(result['__v']),
      })
    })
  }

  submission(){
    console.warn(this.editEmp1.value);
    this.pdtservice.updateData(this.router.snapshot.params['_id'],this.editEmp1.value,).subscribe((result)=>{console.warn(result)})
    Swal.fire({
      title: 'Update successfull',
      text:'please go back and check the updated details',
      icon:'success',
      showCancelButton:true,
      confirmButtonText:'go back to test page',
      cancelButtonText:'NO , KEEP IT'
    }).then((result)=>{
      if (result.value){
        this._router.navigate(["/testsEdit"]);
      } else if(result.dismiss === Swal.DismissReason.cancel){
        
      }
    })
   }
}
