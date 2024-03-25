import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent {
  userForm: FormGroup

  constructor(private fb: FormBuilder){
    this.userForm = this.fb.group({
      fname:[""],
      lname:[""],
      details: this.fb.array([
        this.fb.group({
          address:[""],
          phone:[""],
        })
      ])
    })
  }

  get details(){
    return this.userForm.get("details") as FormArray
  }

  addDetails(){
    this.details.push(this.fb.group({
      address:[""],
      phone:[""],
    }))
  }

}
