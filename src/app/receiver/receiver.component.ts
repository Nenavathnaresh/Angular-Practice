import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.css'
})
export class ReceiverComponent {

  constructor(public router:ActivatedRoute){}

  ngOnInit(){
   console.log(this.router.snapshot.params);
   
  }
}
