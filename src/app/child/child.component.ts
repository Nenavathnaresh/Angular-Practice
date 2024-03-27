import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
count:any = 0 ;

increment(){
this.count++
}

decrement(){
  this.count--
}
}