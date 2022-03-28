import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PregancyMeasuresComponent } from './pregancy-measures/pregancy-measures.component';
import { HomeComponent } from './home/home.component';
import { SpecilizationComponent } from './specilization/specilization.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { FormTableComponent } from './form-table/form-table.component';
import { PatientsViewComponent } from './patients-view/patients-view.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { PatientReviewsComponent } from './patient-reviews/patient-reviews.component';
import { TherapiesComponent } from './therapies/therapies.component';
import { AdminLoginPageComponent } from './admin-login-page/admin-login-page.component';
import { AdminDataComponent } from './admin-data/admin-data.component';
import { ViewAppointmentDataComponent } from './view-appointment-data/view-appointment-data.component';
import { TestsEditComponent } from './tests-edit/tests-edit.component';
import { TestFormEditComponent } from './test-form-edit/test-form-edit.component';
import { DoctorUpdateComponent } from './doctor-update/doctor-update.component';
import { DoctorUpdateFormComponent } from './doctor-update-form/doctor-update-form.component';
const routes: Routes = [
  {path:"",pathMatch:"full",redirectTo:"/home"},
  {path:'home',component:HomeComponent},
  {path:'pregancy', component:PregancyMeasuresComponent},
  {path:'specilization/:_id',component:SpecilizationComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'formTable/:_id',component:FormTableComponent},
  {path:'patientspage',component:PatientsViewComponent},
  {path:'aboutUs',component:AboutUsComponent},
  {path:'doctorsList',component:DoctorsListComponent},
  {path:'patientreviews',component:PatientReviewsComponent},
  {path:'therapies',component:TherapiesComponent},
  {path:'adminpage', component:AdminLoginPageComponent},
  {path:'adminData',component:AdminDataComponent},
  {path:'appointData',component:ViewAppointmentDataComponent},
  {path:'testsEdit', component:TestsEditComponent},
  {path:'testFormEdit/:_id', component:TestFormEditComponent},
  {path:'doctorUpdate',component:DoctorUpdateComponent},
  {path:'doctorUpdateForm/:_id', component:DoctorUpdateFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
