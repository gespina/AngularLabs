import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'app/shared/login.service';

@Component({
  selector: 'nw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message:string;
  
  constructor(
    private _route: ActivatedRoute,
    private _loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  login(){
    // this._route.
    // this._loginService.user.username = 
  }
}

export interface User {
  userid: number;
  username: string;
  password: string;
  givenName: string;
  familyName: string;
}
