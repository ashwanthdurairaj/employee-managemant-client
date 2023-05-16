import { Component, OnInit } from '@angular/core';
import { AuthenService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';
import { EmailService } from 'src/app/services/email.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  list: any;
  constructor(private authService: AuthenService,
    private router: Router,
    private emailService: EmailService,
    private dataService: DataService){
  }

  ngOnInit() {
    const data = this.emailService.getSharedData()
    this.list = data
  }

  onLogoutClick()
  {
    this.authService.logout()
    this.router.navigate([''])
  }

  onClick(id, title, deadline, description){
    console.log(id, title, deadline, description)
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
