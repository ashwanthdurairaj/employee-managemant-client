import { Component, OnInit } from '@angular/core';
import { ValidateService } from 'src/app/services/validate.service';
import {Router} from '@angular/router';
import { AuthenService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: any;
  username: any;
  email: any;
  password: any;
  role: any;
  status: boolean;
  message: string;
  
  constructor(private validateService:ValidateService,
  private authService:AuthenService, 
private router:Router) {
  }
  
  ngOnInit() {}

  onRegisterSubmit()
  {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
      role: this.role
    }
    console.log(user);
    if(!this.validateService.validateRegister(user))
    {
      console.log('Please fill in all fields')
      this.status = false;
      this.message = 'Please fill in all fields'
      return false;
    }
    else if(!this.validateService.validateEmail(user.email))
    {
      console.log('Enter the email id properly')
      this.status = false;
      this.message = 'Enter the email id properly';
      return false;
    }
    else if(!this.validateService.validatePassword(user.password))
    {
      console.log('Enter the password properly')
      this.status = false;
      this.message = 'Enter the password properly';
      return false;
    }
    //write the code for form validation here

    this.authService.registerUser(user).subscribe(data => {
      console.log(data)
      if(data['success'])
      {
        this.status = true;
        this.message = 'Registration successfully'
        this.name = undefined;
        this.email = undefined;
        this.password = undefined;
        this.role = undefined;
        this.username = undefined;
        this.router.navigate(['/register']);
      }
      else
      {
        this.router.navigate(['/register']);
      }
    }, error => {
      this.status = false;
      this.message = 'Registration unsuccessful'
    })  

  }
  onLogoutClick()
  {
    this.authService.logout()
    this.router.navigate([''])
  }


}