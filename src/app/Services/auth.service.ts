import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticatedResponse } from '../Models/authenticated-response.model';
const baseUrl="https://localhost:7232/api/Authenticate";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private authSecretKey = 'Bearer Token';
  isAuthenticatedUser: boolean=false;
  constructor(private client:HttpClient,
    ) { 
    //this.isAuthenticated = !!localStorage.getItem(this.authSecretKey);
  }
  response:AuthenticatedResponse={
    Token: '',
    RefreshToken: '',
    Role: ''
  }
  LOGIN<AuthenticatedResponse>( ){
     let header = new HttpHeaders({'content-type': 'application/json'});
    let entity={
      UserName:"a@a.com",
      Password:"@Test123"
    }

    return this.client.post(baseUrl+"/LOGIN",JSON.stringify( entity),{headers:header}).subscribe(
      {
        next:(re:any)=>{
          console.log(re)
        this.response=re  
        console.log(this.response.Token)
          localStorage.setItem("authSecretKey", this.response.Token);
          this.isAuthenticatedUser = true;
      return true;
        },
        error:(e)=>{
          console.log(e)
        }
      }
    )
                    
  }
}
