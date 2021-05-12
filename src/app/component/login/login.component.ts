import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnyCnameRecord } from 'node:dns';
import { UserService } from  '../../services/user/user.service';

const REGEXEMAIL = new RegExp("^[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-])*@[A-Za-z0-9-]+(?:\\.[A-Za-z0-9-]+)*$");
const REGEXPASSWORd = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=[^$@!#%*?&]*[$#@!%*?&][^$@!#%*?&]*$).{8,}");

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder , private userService: UserService) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submit(){
    if (this.form.valid) {
      console.log(this.form.value);

      let id ;

      let reqObj = {
        email:this.form.value.email,
        password:this.form.value.password
      }

      console.log(reqObj);
      
      this.userService.loginService(reqObj).subscribe((res) => {
        console.log(res);
        console.log(res.id);
        localStorage.setItem('id',res.id);
      },(error) => {
        console.log(error);
      });
    }
  }

    ngOnInit(): void {
    }
  
}
