import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { NgToastModule } from 'ng-angular-popup';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';

import { LoginComponent } from './login/login.component';

import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { JoinnowComponent } from './joinnow/joinnow.component';
import { AboutComponent } from './about/about.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AuthGuard } from './auth.guard';
import { ProfessorComponent } from './professor/professor.component';
import { HeaderComponent } from './header/header.component';
import { ProfessordashboardComponent } from './professordashboard/professordashboard.component';
import { EnrollcourseComponent } from './enrollcourse/enrollcourse.component';
import { StudentComponent } from './student/student.component';
import { StudentrequestComponent } from './studentrequest/studentrequest.component';
import { ApprovestudentComponent } from './approvestudent/approvestudent.component';
import { ApprovedstudentsComponent } from './approvedstudents/approvedstudents.component';
import { MessageComponent } from './message/message.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { StudentalertComponent } from './studentalert/studentalert.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    CourseComponent,
    JoinnowComponent,
    AboutComponent,
    AddcourseComponent,
    ProfessorComponent,
    HeaderComponent,
    ProfessordashboardComponent,
    EnrollcourseComponent,
    StudentComponent,
    StudentrequestComponent,
    ApprovestudentComponent,
    ApprovedstudentsComponent,
    MessageComponent,
    ViewcourseComponent,
    StudentalertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // NgToastModule,
    HttpClientModule
  ],
  providers: [AuthService , AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
