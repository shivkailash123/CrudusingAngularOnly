import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }

  fruitform: FormGroup;

  name:string;
  color:string;
  fruit=[];

  ngOnInit() {

    this.fruitform = new FormGroup({
      name: new FormControl('', [Validators.required]),
      color: new FormControl('', Validators.required)
      
    });
    this.fruit = JSON.parse(localStorage.getItem('fruit')); 
  }

  

  addData(){
    this.fruit.push(this.fruitform.value);
    localStorage.setItem('fruit' , JSON.stringify(this.fruit));
    console.log(this.fruit);
  }

}
