import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  productDet:any;
  constructor(public aR:ActivatedRoute){}

  ngOnInit(){
    this.aR.queryParams.subscribe((data)=>{
      console.log(data);
      this.productDet = data
    })
  }
}
