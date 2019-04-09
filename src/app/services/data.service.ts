import { Injectable } from '@angular/core';
<<<<<<< HEAD
=======
import { Observable } from 'rxjs';
>>>>>>> bc3fd159b7385e1c9c2fe995a87d11b4ecfabcd7

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  name:any;
<<<<<<< HEAD
=======
  cartData:any=[];
>>>>>>> bc3fd159b7385e1c9c2fe995a87d11b4ecfabcd7

  setData(name){
    this.name=name;
  }
  getData()
  {
    return this.name;
  }
}
