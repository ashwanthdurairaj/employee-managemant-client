import { Component, OnInit} from '@angular/core';
import { AuthenService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';
import { ValidateService } from 'src/app/services/validate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  password: String;
  email: String;
  message: String;
  status: boolean;

  constructor(private authService: AuthenService,
    private router: Router,
    private validateService: ValidateService,) {}
  ngOnInit() {}

  onLoginSubmit()
  {
    const user = {
      email: this.email,
      password: this.password
    }

    if(!this.validateService.validateLogin(user))
    {
      console.log('Enter all the fields');
      this.message = 'Enter all the fields';
      console.log(user);
      this.status = false;
      return false;
    }

    else if(!this.validateService.validateEmail(user.email))
    {
      console.log('Enter your email id properly');
      this.message = 'Enter your email id properly'
      console.log(user);
      this.status = false;
      return false;
    }

    
    this.authService.authenticateUser(user).subscribe(data => {
      // if(data.success)
      // {
      //   console.log(data)
      //   // this.authService.storeUserData(data["token"], data["user"])
      // }
      // else
      // {
      //   console.log('failure')
      //   this.router.navigate(['/register'])
      // }
      console.log(data)
      if(data['emp'])
      {
        this.authService.storeUserData(data['token'], data['user'])
        this.status = true;
        this.message = 'Login Successful';
        this.router.navigate(['/profile'])
        console.log('employee')
      }
      else if(data['admin'])
      {
        this.authService.storeUserData(data['token'], data['user'])
        this.status = true;
        this.message = 'Login Successful';
        this.router.navigate(['/register'])
        console.log('admin')
      }
      else if(data['manager'])
      {
        this.authService.storeUserData(data['token'], data['user'])
        this.status = true;
        this.message = 'Login Successful';
        this.router.navigate(['/manager'])
        console.log('manager')
      }

    }, error => {
      this.message = 'Wrong username and password'
      this.status = false;
      return false;
    })

    

  }
}
