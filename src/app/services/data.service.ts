import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  name:any;
  cartData:any=[];

  setData(name){
    this.name=name;
  }
  getData()
  {
    return this.name;
  }
}
