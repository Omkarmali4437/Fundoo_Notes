import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { ClarityIcons,trashIcon } from '@cds/core/icon';

ClarityIcons.addIcons(trashIcon);

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  public show = false;
  public display = false;
  public openModal = false;
  detail = [] as any;
  form: FormGroup;
  cardArray = [] as any;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });

  }

  ngOnInit(): void {
    this.getNoteList();
  }

  getNoteList(){
    let id = localStorage.getItem('id');
    let arr = [] as any;
    
    this.userService.getNoteList(id).subscribe((res) => {
      arr = res;  
      this.cardArray = arr.data.data;
      console.log(this.cardArray[0].id);
    })
  }

  trackByMethod( el:any): number {
    return el.id;
  }

  getId(card : any){
    this.detail = card;
    console.log(this.detail);
  }

  submit() {
    this.show = false;

    if (this.form.valid) {
      console.log("Submit called");
      this.show = false;

      let reqObj = {
        title: this.form.value.title,
        description: this.form.value.description
      }

      console.log(reqObj);

      let id = localStorage.getItem('id');

      this.userService.createNote(reqObj, id).subscribe((res) => {
        console.log(res);
        this.getNoteList();
      }, (error) => {
        console.log(error);
      })

    }
  }

  updateNote(){
    console.log("Method called");
    this.openModal = false;
    
    let id = this.detail.id;
    console.log(id);

    let token = localStorage.getItem('id');

    let reqObj = {
      noteId: id,
      title :  this.form.value.title ,
      description : this.form.value.description
    }

    console.log(reqObj);

    this.userService.updateNote(reqObj,token).subscribe((res) => {
      console.log(res);
      this.getNoteList();
    },(error) => {
      console.log(error);
    })
  }

  deleteNote(){
    
    let token = localStorage.getItem('id');
    let reqObj = {
      "isDeleted": true,
      "noteIdList": [this.detail.id]
    }

    this.userService.deleteNote(reqObj,token).subscribe((res) => {
      console.log(res);
      this.getNoteList();
    },(error) => {
      console.log(error);        
    })
  }

}
