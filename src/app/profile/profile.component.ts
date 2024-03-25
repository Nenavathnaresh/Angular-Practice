import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  countries:any;

  constructor(public http:HttpClient,private cs:CountryService){}

  ngOnInit(){

  }

  fetchData(){
    this.cs.fetchData()
  }

 getData(){
  // this.countries = this.cs.getData()
  // console.log("countries", this.countries);
  
   return this.cs.getData()
  
 }
 
}
