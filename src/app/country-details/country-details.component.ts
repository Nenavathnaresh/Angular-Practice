import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.css'
})
export class CountryDetailsComponent {
  countryCode:any;
  countryDetails:any
  constructor(public aR:ActivatedRoute, public http:HttpClient){}
  ngOnInit(){
    this.aR.params.subscribe((res)=>{
      console.log(res);
      this.countryCode = res['acode']
      this.http.get(`https://restcountries.com/v3.1/alpha/${this.countryCode}`).subscribe((data)=>{
        console.log(data);
        this.countryDetails = data
      })
    })
  }
}
