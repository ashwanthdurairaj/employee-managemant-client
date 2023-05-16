import { Component, OnInit } from '@angular/core';
import { AuthenService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  name: any
  email: any
  manager: any;
  manager_email: any
  constructor(private authService:AuthenService,
    private router : Router) {}
  ngOnInit(): void {
  
    this.authService.getProfile().subscribe(profile => {
      this.name = profile['name']
      this.email = profile['email']
      this.manager = profile['manager']
      this.manager_email = profile['manager_email']
    }, err => {
      console.log(err)
      return false
    })
  }
  onLogoutClick()
  {
    this.authService.logout()
    this.router.navigate([''])
  }
  
}
