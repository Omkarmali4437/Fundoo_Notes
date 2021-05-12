import { Component, OnInit } from '@angular/core';
import '@cds/core/icon/register.js';
import { ClarityIcons, lightbulbIcon,bellIcon,pencilIcon,archiveIcon,trashIcon,cogIcon,barsIcon } from '@cds/core/icon';

ClarityIcons.addIcons(lightbulbIcon);
ClarityIcons.addIcons(bellIcon);
ClarityIcons.addIcons(pencilIcon);
ClarityIcons.addIcons(archiveIcon);
ClarityIcons.addIcons(trashIcon);
ClarityIcons.addIcons(cogIcon);
ClarityIcons.addIcons(barsIcon);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  public collapsed = true;
  constructor() { }
  
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
}
