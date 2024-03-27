import { Component, ViewChild} from '@angular/core';
import { ChildComponent } from './child/child.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactive-forms';
  @ViewChild("highlight") x:any;
  @ViewChild("childView") child:any;

  constructor(public aR:ActivatedRoute){
  console.log(this.x);
    console.log(this.aR);
    
  } 
  
  ngOnInit(){
    console.log(this.x)
  }

  ngAfterViewInit(){
    // console.log(this.x);
    this.x.nativeElement.style.backgroundColor = "blue"
    this.x.nativeElement.style.color = "white"
    console.log(this.child);  
  }

  inc(){
    this.child.increment()
  
  }

  dec(){
    this.child.decrement()
  }


}
