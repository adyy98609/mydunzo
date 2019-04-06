import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit ,OnChanges{

@Input() cartValue:number;
@Input() cartItems:any;


constructor(private dataservice:DataService){}
  ngOnInit() {
    
  }

  ngOnChanges(){
    this.sendData();
  }

  sendData(){
    this.dataservice.setData(this.cartItems);
  }
}
