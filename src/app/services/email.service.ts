import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private tasks: any;
  constructor() { }
  
  setSharedData(data)
  {
    this.tasks = data
    console.log(data)
    console.log(this.tasks)
  }

  getSharedData()
  {
    console.log(this.tasks)
    return this.tasks
  }

}
