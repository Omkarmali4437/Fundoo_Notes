import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { id } from '@cds/core/internal';
import { UserService } from '../../services/user/user.service';

const REGEXNAME = new RegExp("[A-Z]{1}[a-z]{2,}");
const REGEXEMAIL = new RegExp("^[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-])*@[A-Za-z0-9-]+(?:\\.[A-Za-z0-9-]+)*$");
const REGEXPASSWORd = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=[^$@!#%*?&]*[$#@!%*?&][^$@!#%*?&]*$).{8,}");

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.form = this.formBuilder.group({
      fname:['',[Validators.required]],
      lname:['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  public hasError = (controlName: string, errorName: string) => {
      return this.form.controls[controlName].hasError(errorName);
  }

  ngOnInit(): void {
  }

  submit(){
    if (this.form.valid) {
      console.log(this.form.value);

      let reqObj = {
        firstName : this.form.value.fname,
        lastName : this.form.value.lname,
        email : this.form.value.email,
        password : this.form.value.password,
        service : "advance"
      }

      console.log(reqObj);

      this.userService.registerService(reqObj).subscribe((res) => {
        console.log(res);
        console.log(res);
      },(error) => {
        console.log(error);
      })
    }
  }
} 
