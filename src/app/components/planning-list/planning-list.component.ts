import { Component, OnInit } from '@angular/core';
import { PlaningService } from '../../services/planning.service';


@Component({
  selector: 'app-planning-list',
  templateUrl: './planning-list.component.html',
  styleUrls: ['./planning-list.component.css']
})
export class PlanningListComponent  {

  planingList:any = {};

  constructor( public _planingService:PlaningService){
    this.planingList = this._planingService.getPlaningList();
    console.log(this.planingList);
  }


}
