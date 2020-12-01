import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  
  
  constructor(private router: Router,private fb: FormBuilder){}
    accountForm = this.fb.group({
      firstName : ['',Validators.required],
      lastName :  ['',Validators.required],
      businessName : ['',Validators.required],
      websiteUrl : ['',Validators.required],
      
      phoneNumber : ['',Validators.required]
    })
  // accountForm = new FormGroup({
  //   firstName : new FormControl(''),
  //   lastName : new FormControl(''),
  //   businessName : new FormControl(''),
  //   websiteURL : new FormControl(''),
  //   phoneNumber : new FormControl(''),
  // });

  ngOnInit(): void {

    

  }

}
