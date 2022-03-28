import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from './loginservice.service';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.css']
})
export class AdminLoginPageComponent implements OnInit {
  email:string="";
  password:string="";
  sampleData1:any=[];
  "loginForm": FormGroup;
  isSubmitted=false;
  constructor(private pdtservice: LoginserviceService, private route: Router,private formBuilder: FormBuilder) { }
  get(val:string,val1:string){
    this.email=val;
    this.password=val1;
  }
  nextpage(){
    this.pdtservice.getapi().subscribe((data)=>{
      this.sampleData1=data;
      for(let i=0;i<this.sampleData1.length;i++){
        if(this.email === this.sampleData1[i].email && this.password === this.sampleData1[i].password){
          console.warn("hello");
          this.route.navigate(["adminData"])
        }
      }
    })
  }
  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    });
  }
  get formControls(){return this.loginForm.controls;}
  login(){
    console.log(this.loginForm.value);
    this.isSubmitted=true;
    if(this.loginForm.invalid){
      return;
    }
}
}
