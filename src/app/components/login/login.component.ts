import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from "src/app/services/data.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
name:string;
psw:string;
@Output() myMethod = new EventEmitter<string>();
  constructor(private dataService:DataService) { }

  ngOnInit() {
   
    
  }

  // myMethod(name:string){
  //   this.name=name;
  // }
  myOutputMethod(){
     this.dataService.setData(this.name);

}
}
