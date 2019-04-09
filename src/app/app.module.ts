import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { SampleComponent } from './sample/sample.component';
<<<<<<< HEAD
import { HelloComponent } from './components/hello/hello.component';
import { LoginComponent } from "./components/login/login.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { ParentComponent } from "./components/parent/parent.component";
import { ChildComponent } from "./components/child/child.component";
=======

import { LoginComponent } from "./components/login/login.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
>>>>>>> bc3fd159b7385e1c9c2fe995a87d11b4ecfabcd7
import { ProductComponent } from "./components/product/product.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
<<<<<<< HEAD
    ParentComponent,
    ChildComponent,
    ProductComponent,
    CartComponent,
    SampleComponent,
    HelloComponent
=======
    ProductComponent,
    CartComponent,
    SampleComponent
>>>>>>> bc3fd159b7385e1c9c2fe995a87d11b4ecfabcd7
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
