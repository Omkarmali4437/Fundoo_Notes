import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  encode(data : any) {
    const formBody = [];
    for (const property in data) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }

  

  constructor(private http: HttpService) { }

  loginService(data : any){
    return this.http.post('user/login',data,"");
  }

  registerService(data : any){
    return this.http.post('user/userSignUp',data,"");
  }

  forgotService(data : any){
    return this.http.post('user/reset',data,"");
  }

  resetService(data : any,token : any){
    
    let options = {
      headers: new HttpHeaders({
        'Authorization': token,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      })
    }
    return this.http.post('user/reset-password',this.encode(data),options)
  }

  createNote(data: any , id: any){

    
    let options = {
      headers: new HttpHeaders({
        'Authorization': id,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.http.post('notes/addNotes',data,options);
  }

  getNoteList(id:any){
    
    let options = {
      headers: new HttpHeaders({
        'Authorization': id,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.http.get('notes/getNotesList',options)
  }

  updateNote(data : any,token : any ){
    
    let options = {
      headers: new HttpHeaders({
        'Authorization': token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.http.post('notes/updateNotes',data,options);
  }

  deleteNote(data : any,token : any){
    
    let options = {
      headers: new HttpHeaders({
        'Authorization': token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.http.post('notes/trashNotes',data,options);
  }
}