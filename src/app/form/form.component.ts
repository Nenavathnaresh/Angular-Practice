import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  persons:any[] = [];
  currInd:any;
  FirstName:any;
  flag:boolean = false;
  personForm:FormGroup
  selectedperson: any;

  constructor(private fb:FormBuilder){
    this.personForm = this.fb.group({
      fname:["", Validators.required],
      lname:["", Validators.required],
      phone:["", Validators.required],
    })
  }
 
  save(){
    this.persons.push(this.personForm.value)
    console.log(this.personForm);
  }
  
  delete(i:any){
    this.persons.splice(i,1)
  }

  edit(i:any, person:any){
    this.flag = true 
    this.currInd = i 
    this.personForm.setValue(person)
    
  }

  update(){
    this.flag = false 
    this.persons[this.currInd] = this.personForm.value 
  }
}
