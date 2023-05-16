import { Component, OnInit} from '@angular/core';
import { AuthenService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';
import { ValidateService } from 'src/app/services/validate.service';

@Component({
  selector: 'app-leaveform',
  templateUrl: './leaveform.component.html',
  styleUrls: ['./leaveform.component.css']
})

export class LeaveformComponent implements OnInit {
  
  subject: any;
  type: any;
  start: any;
  end: any;
  reason: any;
  employee: any;
  status: any;

  constructor(private authService: AuthenService,
    private router: Router,
    private validateService: ValidateService){}

  ngOnInit() {}

  onLogoutClick()
  {
    this.authService.logout()
    this.router.navigate([''])
  }
  Onclick()
  {
    const user = localStorage.getItem('user')
    if(user !== null)
    {
      const user1 = JSON.parse(user)
      this.employee = user1["_id"]
    }
    const leave = {
      subject: this.subject,
      type: this.type,
      start: this.start,
      end: this.end,
      reason: this.reason,
      employee: this.employee,
    }
    
    if(!this.validateService.validateLeaveRequest(leave))
    {
      this.status = false;
    }
    else
    {
      this.authService.Leave(leave).subscribe(data => {
        if(data['status'] === 'success')
        {
          console.log('hi')
          this.status = true;
        }
        else
        {
          this.status = false;
        }
      })
    }
    
  }
  
}
