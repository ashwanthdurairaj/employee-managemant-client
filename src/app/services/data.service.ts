import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private title: any;
  private description: any;
  private deadline: any;
  private id: any;

  setSharedData(data) {
    this.title = data['title'];
    this.description = data['description'];
    this.deadline = data['deadline'];
    this.id = data['id']
  }

  getSharedData() {
    console.log({title: this.title, description: this.description,deadline: this.deadline, id: this.id})
    return {title: this.title, description: this.description,deadline: this.deadline, id: this.id};
  }
}
