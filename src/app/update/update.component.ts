import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  index:number;
  fruitform: FormGroup;
  fruits=[];
  fruitatindex=[];
  ngOnInit() {

    this.fruitform = new FormGroup({
      name: new FormControl('', [Validators.required]),
      color: new FormControl('', Validators.required)
      
    });

    this.index = this.route.snapshot.params['index'];
    console.log()
    console.log(this.index);
    
    this.fruits = JSON.parse(localStorage.getItem('fruit'));

    this.fruitatindex = this.fruits[this.index];
   

  }
  updateData(){
    this.fruits.splice(this.index, 1);
    this.fruits.push(this.fruitform.value);
    localStorage.setItem('fruit' , JSON.stringify(this.fruits));
  }

}
