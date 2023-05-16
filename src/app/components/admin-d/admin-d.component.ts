import { Component, OnInit } from '@angular/core';
import {AuthenService} from 'src/app/services/auth.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-admin-d',
  templateUrl: './admin-d.component.html',
  styleUrls: ['./admin-d.component.css']
})
export class AdminDComponent implements OnInit {
  constructor(private authService: AuthenService,
    private router: Router) {}
  ngOnInit() {}
  onLogoutClick()
  {
    this.authService.logout()
    this.router.navigate([''])
  }
}
