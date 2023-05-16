import { Component, OnInit } from '@angular/core';
import { ValidateService } from 'src/app/services/validate.service';
import {Router} from '@angular/router';
import { AuthenService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  token: any;
  constructor(public authService: AuthenService,
    private router: Router) {}
  ngOnInit(): void {

  }
  onLogoutClick()
  {
    this.authService.logout()
    this.router.navigate([''])
  }

  loggedIn()
  {
    this.token = localStorage.getItem('id_token')
    return this.token
  }

}
