import { Component, OnInit } from '@angular/core';
import { AuthenService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-announce',
  templateUrl: './announce.component.html',
  styleUrls: ['./announce.component.css']
})
export class AnnounceComponent implements OnInit {

  ngOnInit(): void {
      
  }

  constructor(private router: Router, private authService: AuthenService) {}

  onLogoutClick()
  {
    this.authService.logout()
    this.router.navigate([''])
  }
}
