import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-one',
  templateUrl: './contacts-one.component.html',
  styleUrls: ['./contacts-one.component.css']
})
export class ContactsOneComponent implements OnInit {
  public isCollapsed = true;


  constructor() { }

  ngOnInit(): void {
  }

}
