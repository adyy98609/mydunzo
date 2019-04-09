<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit ,AfterViewInit, OnChanges} from '@angular/core';
import { DataService } from '../../services/data.service';
>>>>>>> bc3fd159b7385e1c9c2fe995a87d11b4ecfabcd7

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }

  ngOnInit() {
  }

=======
  cartData:any;
  newcartData:any=[];

  constructor(private dataservice:DataService) { }

  ngOnInit(){
    this.cartData=this.dataservice.getData();
    console.log("*******",this.cartData)
  }
  
>>>>>>> bc3fd159b7385e1c9c2fe995a87d11b4ecfabcd7
}
