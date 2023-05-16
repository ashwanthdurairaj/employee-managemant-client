import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router'; 
import { AuthenService } from '../services/auth.service';
import { NavbarComponent } from '../components/navbar/navbar.component';
@Injectable()

export class AuthGuard implements CanActivate{
  
  constructor(private router: Router, private authService: AuthenService)
  {}

  canActivate()
  {
    if(this.authService.getToken())
    {
      console.log(this.authService.getToken())
      return true;
    }
    else
    {
      console.log(this.authService.getToken())
      this.router.navigate(['/'])
      return false;
    }
  }
}