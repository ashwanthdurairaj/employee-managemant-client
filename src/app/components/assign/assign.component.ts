import { Component, OnInit } from '@angular/core';
import { AuthenService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {
  
  suggestions: any;
  searchTerm: String;
  Token:String;
  title:any;
  description:any;
  File:any;
  Date:any;
  status:any;

  ngOnInit(): void {
      
  }

  constructor(private authService: AuthenService,
    private router: Router) {}

  employeeList()
  {
    const manager = localStorage.getItem('user')
    if(manager !== null){
      let datae = JSON.parse(manager)
      this.authService.getSelectEmployees(datae).subscribe(data => {
        this.suggestions = data;
        console.log(data)
        }
      )
    }
    else
    {
      console.log("user not authorised")
    }
  }
  onLogoutClick()
  {
    this.authService.logout()
    this.router.navigate([''])
  }
  Submit()
  {
    console.log(this.title)
    console.log(this.description)
    console.log(this.searchTerm)
    console.log(this.Date)
    console.log(this.File)
    const data = {
      title: this.title,
      description: this.description,
      searchTerm: this.searchTerm,
      deadline: this.Date,
    }
    this.authService.Assignment(data).subscribe(datae => {
      console.log(datae);
        this.status = true
        this.title = ''
        this.searchTerm = ''
        this.Date = ''
        this.File = ''
        this.description = ''
        
    })
  }

}
