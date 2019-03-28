import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { Input } from "@angular/core";
import { DataService } from "src/app/services/data.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
n;
@Input() name: string;
count:number;


  constructor(private dataservice:DataService) {   
   }

  ngOnInit() {
 this.n=this.dataservice.getData(); 
 //console.log(this.n); 
}
showCounter(count) {
  this.count=count;
  //console.log(this.count);
}


}
