import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
w: number;
  constructor() {this.w = Math.round(window.innerHeight * .96); }

  ngOnInit() {
  }

}
