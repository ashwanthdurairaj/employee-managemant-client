import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenService } from 'src/app/services/auth.service';
import { ValidateService } from 'src/app/services/validate.service';
import { map, startWith } from 'rxjs';


@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit{
  emp_suggestions: any;
  man_suggestions: any;
  searchTerm: String;
  search: String;
  status: Boolean;
  ngOnInit(): void {
      
  }
  constructor(private authService: AuthenService,
    private router: Router,
    private validateService: ValidateService) {
  }
  // onSelect(event) {
  //   console.log(event.item);
  //   console.log(this.searchTerm)
  // }

  managerList() 
  {
    this.authService.getManager().subscribe(data => {
      this.man_suggestions = data;
    })
  }

  employeeList()
  {
    console.log('Clicked')
    this.authService.getEmployee().subscribe(data => {
      this.emp_suggestions = data;
    });
  }

  matching()
  {
    const items = {
      employee: this.searchTerm,
      manager: this.search
    }
    this.authService.matcher(items).subscribe(data => {
      if(data['message'])
      {
        this.status = false
      }
      else
      {
        this.status = true;
      }
      this.searchTerm = ''
      this.search = ''
      console.log(this.status)
    })
  }

  onLogoutClick()
  {
    this.authService.logout()
    this.router.navigate([''])
  }
}
