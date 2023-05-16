import { Component, OnInit } from '@angular/core';
import { AuthenService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  title: any;
  description: any;
  deadline: any;
  id: any;
  message: any;
  status: boolean;
  list: any;
  type:any;
  
  constructor(private authService: AuthenService,
    private router: Router,
    private dataService: DataService){

  }
  ngOnInit(){
    const data = this.dataService.getSharedData()
    console.log(data)   
    this.title = data['title']
    this.description = data['description']
    this.deadline = data['deadline']    
    this.id = data['id']
    const storage = localStorage.getItem('user')
    if(storage != null)
    {
      const local = JSON.parse(storage)
      this.type = local['type']
    }
    const id = {
      id: this.id
    }
    this.authService.fetchMessage(id).subscribe(res => {
      this.list = res
    })
  }
  closeTask()
  {
    console.log('closeTask')
    this.authService.close(this.id).subscribe(res => {
      console.log(res)
      if(this.type == 'manager')
      {
        this.router.navigate(['/manager'])
      }
      else if(this.type == 'employee')
      {
        this.router.navigate(['/dashboard'])
      }

    })
  }
  onSubmit(){
    console.log(this.message)
    const data = {
      message: this.message,
      id: this.id
    }
    console.log(data)
    //form validation
    this.authService.message(data).subscribe(res => {
      if(res['status'] === 'success')
      {
        this.message = ''
        const id = {
          id: this.id
        }
        this.authService.fetchMessage(id).subscribe(res => {
          this.list = res
        })
      }
    })
  }

  OnLogoutClick()
  {
    this.authService.logout()
    this.router.navigate([''])
  }



}
