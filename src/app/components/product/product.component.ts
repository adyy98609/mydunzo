import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/entities/item';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  items: Item[] = [];
  count: number =0;
  quantity:number[]=[];
  prodName: string;
  compName: string;
  price: number;
  cn: string;
  item: Item;
  @Output() emitter = new EventEmitter();
  addProduct:any;


  constructor() {
    this.addProduct={
      product:{
        id:'',
        productName:'',
        companyName:'',
        price:'',
        photo:''
      },
      quantity:''
    };
   }

  
  // ngOnChanges(){
  //   this.dataservice.setData(this.count);
  //   this.onAdd();
  //   this.onSub();
  //   console.log("Test",this.count);
  // }

  ngOnInit() {

    this.items =
      [
        {
          product:
            {
              id: 0,
              productName: 'Noodles',
              companyName: 'Maggie',
              price: 12,
              photo: 'assets/images/maggie.jpg'
            },
          quantity: 0

        },
        {
          product:
            {
              id: 1,
              productName: 'Noodles',
              companyName: 'Patanjali',
              price: 10,
              photo: 'assets/images/patanjali.png'
            },
          quantity: 0

        },
        {
          product:
            {
              id: 2,
              productName: 'Honey',
              companyName: 'Patanjali',
              price: 18,
              photo: 'assets/images/DaburHoney.png'
            },
          quantity: 0
        }
      ];
  };
 
  addItem() {
    console.log("addProduct details",this.addProduct);
    this.items.push(this.addProduct);
  }
  onAdd(productId){
      this.items[productId].quantity++;
      console.log(productId)
      this.count++;
      this.emitter.emit(this.count);
  }

  onSub(productId){
    this.items[productId].quantity--;
    console.log(productId);
    this.count--;
    this.emitter.emit(this.count);
  }


    coName(compName: string){
      this.item.product.companyName=compName;
    }
     proName(prodName: string){
       this.item.product.productName=prodName;
     }

    proPrice(price: number){
      this.item.product.price=price;
    }
}
