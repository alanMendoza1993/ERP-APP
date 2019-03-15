import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-shopping',
  templateUrl: './list-shopping.component.html',
  styleUrls: ['./list-shopping.component.css']
})
export class ListShoppingComponent implements OnInit {
  w:Number;
  constructor() { 
    this.w = Math.round(window.innerHeight * .95);
  }

  ngOnInit() {
  }

}
