import { Component, OnInit } from '@angular/core';
import { AuthenService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-manager-d',
  templateUrl: './manager-d.component.html',
  styleUrls: ['./manager-d.component.css']
})
export class ManagerDComponent implements OnInit {

  list : any;
  temp:any;
  search: String;
  suggestions: any;
  status: any;
  searchList: any;
  message:String;
  constructor(private authService: AuthenService,
    private router: Router,
    private emailService: EmailService) {}

    ngOnInit(){
      const manager = localStorage.getItem('user')
      this.status = false
      if(manager !== null){
        let datae = JSON.parse(manager)
        this.authService.getSelectEmployees(datae).subscribe(data => {
          this.list = data;
          console.log(this.list)
          }
        )
        this.authService.suggestions(datae).subscribe(data => {
          this.suggestions = data
        })
      }
      else
      {
        console.log('User not authorised')
      }
}
    Search()
    {
      console.log(this.search)
      const manager = localStorage.getItem('user')
      if(manager !== null){
        let datae = JSON.parse(manager)
        const lol = {
          search: this.search,
          manager: datae['_id']
        }
        this.authService.lister(lol).subscribe(res => {
          console.log(res)
          this.searchList = res
          if(this.searchList.length > 0)
          {
            this.status = true
          }
          else
          {
            this.status = 'lol'
          }
        })
      }

    }
  onLogoutClick()
  {
    this.authService.logout()
    this.router.navigate([''])
  }

  onClick(data){
    const l = {
      email: data
    }
    this.authService.getTasks(l).subscribe(res => {
      console.log(res)
      this.temp = res
      console.log(this.temp)
      this.emailService.setSharedData(this.temp)
      this.router.navigate(['/tasks'])
    })
  }

}
