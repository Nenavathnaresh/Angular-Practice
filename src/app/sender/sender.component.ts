import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css'
})
export class SenderComponent {

constructor(public router:Router){}

ngOnInit(){}

navigateToReceiver(){
  let data = {
    "name":"Naresh",
    "age" : "22",
    "city":"hyd"
  }
  this.router.navigate( ["receiver"],{queryParams:{x:data}})
}
}
