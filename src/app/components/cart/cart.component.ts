import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartData:any;
  newcartData:any=[];

  constructor(private dataservice:DataService) { }

  ngOnInit(){
    this.cartData=this.dataservice.getData();
    console.log("*******",this.cartData)
  }
  
}
