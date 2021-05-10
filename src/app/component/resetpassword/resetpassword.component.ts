import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from  '../../services/user/user.service';

const REGEXPASSWORd = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=[^$@!#%*?&]*[$#@!%*?&][^$@!#%*?&]*$).{8,}");

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.form = this.formBuilder.group({
      password: ['', Validators.required,Validators.pattern(REGEXPASSWORd)]
    });
  }

  submit(){
    if (this.form.valid) {
      console.log(this.form.value);
      
      let reqObj = {
        password : this.form.value.password 
      }

      this.userService.resetService(reqObj).subscribe((res) => {
        console.log(res);
      }, (error) => {
        console.log(error);
      })
    }
  }

  ngOnInit(): void {
  }

}
