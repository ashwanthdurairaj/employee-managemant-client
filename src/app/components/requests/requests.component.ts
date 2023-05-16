import { Component, OnInit } from '@angular/core';
import { AuthenService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  requests: any;
  // id:any;
  ngOnInit(){
    

    const user = localStorage.getItem('user');
    console.log(user)
    if(user != null){
      let manager = JSON.parse(user)
      console.log(manager)
      const data = {
        manager: manager['_id']
      }
      console.log(data)
      this.authService.displayRequests(data).subscribe(res => {
        console.log(res)
        this.requests = res;
        console.log(this.requests)
      })
    }  
  }

  constructor(private authService: AuthenService,
    private router: Router) {}

    onLogoutClick()
  {
    this.authService.logout()
    this.router.navigate([''])
  }

  grant(bro)
  {
    const data = {
      id: bro
    }
    console.log(data)
    this.authService.Grant(data).subscribe(res => {
      console.log(res)
    })
  }
    

}
