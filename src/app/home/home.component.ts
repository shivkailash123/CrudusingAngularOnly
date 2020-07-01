import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }
  fruits = []
  ngOnInit() {
    this.fruits = JSON.parse(localStorage.getItem('fruit')); 
   
  }
  
 

check(){
  console.log(this.fruits);
  this.router.navigate(["adddata"]);
}

delete(index){
  this.fruits.splice(index, 1);
}
update(index){
  this.router.navigate(['/update',index])
}

}
