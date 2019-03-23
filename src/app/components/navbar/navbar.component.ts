import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

@Input() cartValue:number;

constructor(){}
  ngOnInit() {
    
  }
}
