import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user)
  {
    if(user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined || user.role == undefined)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  validateLogin(user)
  {
    if(user.email == undefined || user.password == undefined)
    {
      return false;
    }
    else
    {
      return true;
    }
  }


  validateEmail(email)
  {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);    
  }

  validateLeaveRequest(leave)
  {
    if(leave.subject == undefined || leave.type == undefined || leave.start == undefined || leave.end == undefined || leave.reason == undefined)
    {
      return false;      
    }
    else
    {
      return true;
    }
  }

  validatePassword(password)
  {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return regex.test(password);
  }

}
