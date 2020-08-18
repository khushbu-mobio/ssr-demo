import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicPageComponent } from './public-page/public-page.component';
import { StudentListComponent } from './student-list/student-list.component';


const routes: Routes = [                                                           
  {
    path: "public",                                                   
    component: PublicPageComponent                                  
  },
  {
    path: "studentlist",
    component: StudentListComponent
  }                                                                       
];                                                

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
