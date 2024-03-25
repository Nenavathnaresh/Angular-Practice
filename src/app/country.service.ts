import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
 private countrySubject = new BehaviorSubject(null)
//  public data$ = this.countrySubject.asObservable();

  constructor( private http:HttpClient) {}

  ngOnInit(){
   
    
  }

  fetchData(){
    this.http.get("https://restcountries.com/v3/all").subscribe((data:any)=>{
      this.countrySubject.next(data)
      // console.log(this.countrySubject);
      
    })
  }

  getData(){
    return this.countrySubject.value;
  }

}
