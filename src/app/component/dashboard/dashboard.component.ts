import { Component, OnInit } from '@angular/core';
import '@cds/core/icon/register.js';
import { ClarityIcons, lightbulbIcon,bellIcon,pencilIcon,archiveIcon,trashIcon,cogIcon,barsIcon,userIcon } from '@cds/core/icon';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

ClarityIcons.addIcons(lightbulbIcon);
ClarityIcons.addIcons(bellIcon);
ClarityIcons.addIcons(pencilIcon);
ClarityIcons.addIcons(archiveIcon);
ClarityIcons.addIcons(trashIcon);
ClarityIcons.addIcons(cogIcon);
ClarityIcons.addIcons(barsIcon);
ClarityIcons.addIcons(userIcon);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  public collapsed = true;
  constructor(private userService : UserService,private router : Router) { }
  
  ngOnInit(): void {
    this.collapsed = true;
  }

  public resize() {
    if(this.collapsed == true){
      this.collapsed = false;
    }else if(this.collapsed == false){
      this.collapsed = true;
    }
  } 

  logout(){
    let id = localStorage.getItem('id');

    this.userService.logout(id).subscribe((res) => {
      console.log(res);
      this.router.navigate(['login'])
    },(error) => {
      console.log(error);
    })
    
  }
}
