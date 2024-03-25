import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent {
  countries:any;

  constructor(public http: HttpClient){}

  ngOnInit(){
    let countriesvlist
    this.http.get("https://restcountries.com/v3/all").subscribe((res)=>{
      this.countries = res;
      
      console.log(this.countries);
      
    })
  }

}
