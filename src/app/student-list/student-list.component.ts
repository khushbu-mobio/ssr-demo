import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  constructor() { }
  public items = [];
  public name;

  ngOnInit() {
    var getNames = JSON.parse(localStorage.getItem("names"));
    console.log("dtaget===", getNames);
    this.items = getNames;
   
  }
  public addToList() {
    if (this.name == '') {
      alert("please fill studen name")
    }
    else {
      this.items.push(this.name);
      this.name = '';
      console.log("item ==", this.items);
      localStorage.setItem("names", JSON.stringify(this.items));
    }
  }
  public deleteName(index) {
    this.items.splice(index, 1);
    localStorage.setItem("names", JSON.stringify(this.items));
  }
}
