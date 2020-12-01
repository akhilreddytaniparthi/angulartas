import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup,Validator, Validators } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(private router: Router,private fb: FormBuilder) { }
  addressForm = this.fb.group({
    addressLine1 : ['',Validators.required],
    addressLine2 : ['',Validators.required],
    city : ['',Validators.required],
    stateProvinceRegion : ['',Validators.required],
    zip : ['',Validators.required],
    country : ['',Validators.required],
  });
  ngOnInit(): void {
  }

}
