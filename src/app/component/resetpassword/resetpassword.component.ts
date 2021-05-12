import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from  '../../services/user/user.service';
import { Router,ActivatedRoute } from '@angular/router';

const REGEXPASSWORd = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=[^$@!#%*?&]*[$#@!%*?&][^$@!#%*?&]*$).{8,}");

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService,private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      password: ['', Validators.required]
    });
  }

  submit(){
    if (this.form.valid) {
      console.log(this.form.value);
      
      let token = this.route.snapshot.paramMap.get('token');

      let reqObj = {
        newPassword : this.form.value.password 
      }

      this.userService.resetService(reqObj,token).subscribe((res) => {
        console.log(res);
      }, (error) => {
        console.log(error);
      })
    }
  }

  ngOnInit(): void {
  }

}
