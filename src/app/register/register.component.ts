import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  constructor(private router:Router){}
  onClick(pageName:string):void{
    this.viewSec = false;
      this.router.navigate(['/welcome']);
  }
  //  get userName(){
  //    return this.registrationForm.get('userName');
  //  }
  viewSec = true;

  ngOnInit(): void {


    this.registrationForm = new FormGroup({
      email : new FormControl('',[ Validators.required,
                                  Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
                                 ]
                              ),
      userName : new FormControl('',[Validators.required,
                                     Validators.minLength(3)]),
      password : new FormControl('',[Validators.required,
                                     Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
                                    ]
                                 ),
      subscribe:new FormControl (false)
    });
  }

}
