import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  w : number;
  constructor() {

    this.w = Math.round(window.innerHeight * .95) 

  }

  ngOnInit() {
  }



}
