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

  public items = [];
  public name;

  public addToList() {
    if (this.name == '') {
      alert("please fill studen name")
    }
    else {
      this.items.push(this.name);
      this.name = '';
    }
  }

  public deleteName(index) {
    this.items.splice(index, 1);
  }
}
