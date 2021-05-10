import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseurl = environment.baseurl;
  constructor(private httpClient: HttpClient) { }
    
  post(url : any,data : any){
    return this.httpClient.post(this.baseurl + url , data);
  }
}
