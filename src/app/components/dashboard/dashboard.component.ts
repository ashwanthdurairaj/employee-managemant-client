import { Component, OnInit } from '@angular/core';
import { AuthenService } from 'src/app/services/auth.service';
import {Router} from '@angular/router'
import { HttpClient } from '@angular/common/http';
import {DataService} from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  tasks: any;
  constructor(private authService:AuthenService,
    private router: Router,
    private http: HttpClient,
    private dataService: DataService) {}
  
    ngOnInit(){
      const user = localStorage.getItem('user');
      if(user != null) {
        let datae = JSON.parse(user)
        this.authService.tasks(datae).subscribe(data => {console.log(data)
       this.tasks = data})
      }
  }

  OnLogoutClick()
  {
    this.authService.logout()
    this.router.navigate([''])
  }

  onClick(id, title, description, deadline)
  {
    const d = {
      id: id,
      title: title,
      description: description,
      deadline: deadline,
    }
    this.dataService.setSharedData(d)
    this.router.navigate(['/thread'])
  }
}
