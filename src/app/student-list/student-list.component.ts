import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /* An empty array that is responsible 
  to add a division */
public items = []; 
/* A two-way binding performed which 
  pushes text on division */

public name;

/* When input is empty, it will 
  not create a new division */
public addToList() { 
   if (this.name == '') { 
     alert("please fill studen name")
   } 
   else { 
       this.items.push(this.name); 
       this.name = ''; 
   } 
} 

/* This function takes to input the 
  task, that has to be deleted*/
public deleteName(index) { 
   this.items.splice(index, 1); 
} 

}
