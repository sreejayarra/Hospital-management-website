import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PregancyMeasuresComponent } from './pregancy-measures/pregancy-measures.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
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


@NgModule({
  declarations: [
    AppComponent,
    PregancyMeasuresComponent,
    HomeComponent,
    SpecilizationComponent,
    AppointmentComponent,
    FormTableComponent,
    PatientsViewComponent,
    AboutUsComponent,
    DoctorsListComponent,
    PatientReviewsComponent,
    TherapiesComponent,
    AdminLoginPageComponent,
    AdminDataComponent,
    ViewAppointmentDataComponent,
    TestsEditComponent,
    TestFormEditComponent,
    DoctorUpdateComponent,
    DoctorUpdateFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
