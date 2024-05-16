import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-handle-checkbox',
  templateUrl: './handle-checkbox.component.html',
  styleUrl: './handle-checkbox.component.css'
})
export class HandleCheckboxComponent {

  arr:any[] = [1,2, 3,4,5,6,7,8,9,0]
  checkedNum:any[] = []
  parentCheck:any;
  selectAll:boolean = false;
  selectOne:boolean[] = [];

  ngOnInit(){
    this.selectOne = Array(this.arr.length).fill(false)
    console.log(this.selectOne);
  }

  checkNum(e:any, i:number){
   this.selectOne[i] = e.target.checked
  }
  // checkNum(e:any){
  //   console.log(e)
  //   if(e.target.checked){
  //     this.checkedNum.push(e.target.value)
  //   }
  //   else{
  //     this.checkedNum = this.checkedNum.filter((n)=>{
  //       if(e.target.value !== n){
  //         return true
  //       }
  //       else{
  //         return false
  //       }
  //     })
  //   }
  //   console.log(this.checkedNum)
  // }

  checkAllGames(e:any){
   const isChecked = e.target.checked 
   this.selectOne = this.selectOne.map(()=> isChecked)

  }

  // isAllCheckBoxSelected(){
  //   return this.selectOne.every((c)=>)
  // }

}
