import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  public show = false;
  form: FormGroup;
  cardArray = [] as any;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });

  }

  ngOnInit(): void {

    let id = localStorage.getItem('id');
    this.userService.getNoteList(id).subscribe((res) => {
      let length = res.data.data.length;
      console.log(length);

      for (let i = 0; i < length; i++) {
        this.cardArray[i] = [{
          title: res.data.data[i].title,
          description: res.data.data[i].description
        }]
      }
      console.log(this.cardArray);

    })
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

      }, (error) => {
        console.log(error);
      })

      this.userService.getNoteList(id).subscribe((res) => {
        let length = res.data.data.length;
        console.log(length);

        for (let i = 0; i < length; i++) {
          this.cardArray[i] = [{
            title: res.data.data[i].title,
            description: res.data.data[i].description
          }]
        }
        console.log(this.cardArray);

      })
    }
  }

}
