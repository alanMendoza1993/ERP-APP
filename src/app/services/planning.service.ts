import { Injectable } from '@angular/core';

@Injectable()
export class PlaningService {

  private listItem:any[] = [

        {
            id : "",
            name : "Prueba 1",
            description: "lorem",
            status : 1,
            date: ''
        },
        {
            id : "",
            name : "Prueba 2",
            description: "lorem",
            status : 1,
            date: ''
         },
        {
            id : "",
            name : "Prueba 3",
            description: "lorem",
            status : 1,
            date: ''
         },
        {
            id : "",
            name : "Prueba 4",
            description: "lorem",
            status : 1,
            date: ''
        },
        {
            id : "",
            name : "Prueba 5",
            description: "lorem",
            status : 1,
            date: ''
        }

  ]

      getPlaningList():any{
           return this.listItem;
      }
}


