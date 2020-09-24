import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-crag',
  templateUrl: './add-crag.component.html',
  styleUrls: ['./add-crag.component.scss']
})
export class AddCragComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = new FormControl('');

  updateName() {
    this.name.setValue('Nancy');
  }


}
