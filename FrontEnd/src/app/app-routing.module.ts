import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { JoinnowComponent } from './joinnow/joinnow.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { ProfessorComponent } from './professor/professor.component';
import { EnrollcourseComponent } from './enrollcourse/enrollcourse.component';
import { StudentComponent } from './student/student.component';
import { StudentrequestComponent } from './studentrequest/studentrequest.component';
import { ApprovestudentComponent } from './approvestudent/approvestudent.component';
import { ApprovedstudentsComponent } from './approvedstudents/approvedstudents.component';
import { MessageComponent } from './message/message.component';
import { HeaderComponent } from './header/header.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { StudentalertComponent } from './studentalert/studentalert.component';
import { FooterComponent } from './footer/footer.component';
import { ProfessordashboardComponent } from './professordashboard/professordashboard.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'course',component:CourseComponent},
  {path:'joinnow',component:JoinnowComponent},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'professor',component:ProfessorComponent},
  {path:'professordashboard',component:ProfessordashboardComponent},
  {path:'addcourse',component:AddcourseComponent},
  {path:'enrollcourse',component:EnrollcourseComponent},
  {path:'student',component:StudentComponent},
  {path:'studentrequest',component:StudentrequestComponent},
  {path:'approvestudent',component:ApprovestudentComponent},
  {path:'approvedstudents',component:ApprovedstudentsComponent},
  {path:'message',component:MessageComponent},
  {path:'viewcourse',component:ViewcourseComponent},
  {path:'studentalert',component:StudentalertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
