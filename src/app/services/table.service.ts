import { mapToMapExpression } from "@angular/compiler/src/render3/util";
import { Injectable } from '@angular/core';
import { Status } from "../enums/status.enum";
import { Record } from "../interfaces/record";


  const backup: Array<Record> = [
    {
      name: "James Doe",
      email: "james@email.com",
      item: "ARIEL Color 4,4l",
      date: new Date(),
      status: Status.OPENED,
      price: "7.86"
    },
    {
      name: "Jane Doe",
      email: "jane@email.com",
      item: "iPhone SE 256GB 2020",
      date: new Date("01-24-2020"),
      status: Status.DENIED,
      price: "606.90"
    },
    {
      name: "Mae Hall",
      email: "mae.hall@mail.com",
      item: "Garmin Fenix 7X Sapphire Solar Black DLC",
      date: new Date("04-01-2021"),
      status: Status.PROCESSED,
      price: "999.90"  
    },
    {
      name: "Chantal Matty",
      email: "chantalm@mail.com",
      item: "Crucial BX500 2TB",
      date: new Date("12-12-2021"),
      status: Status.PROCESSED,
      price: "177.90"  
    },
    {
      name: "Irving Georgie",
      email: "igeorgie@mail.com",
      item: "MSI H510 PRO-E",
      date: new Date("01-20-2021"),
      status: Status.DENIED,
      price: "63.62"  
    },
    {
      name: "Vera Damon",
      email: "vdamon@mail.com",
      item: "Apple Watch Series 7",
      date: new Date(),
      status: Status.PROCESSED,
      price: "420.08"  
    },
    {
      name: "Sydnee Curran",
      email: "sydcurran@mail.com",
      item: "TRX Move",
      date: new Date(),
      status: Status.OPENED,
      price: "105.90"  
    },
    {
      name: "Sydnee Curran",
      email: "sydcurran@mail.com",
      item: "TRX Move",
      date: new Date(),
      status: Status.OPENED,
      price: "105.90"  
    },
    {
      name: "Sydnee Curran",
      email: "sydcurran@mail.com",
      item: "TRX Move",
      date: new Date(),
      status: Status.OPENED,
      price: "105.90"  
    },
    {
      name: "Sydnee Curran",
      email: "sydcurran@mail.com",
      item: "TRX Move",
      date: new Date(),
      status: Status.OPENED,
      price: "105.90"  
    },
    {
      name: "Sydnee Curran",
      email: "sydcurran@mail.com",
      item: "TRX Move",
      date: new Date(),
      status: Status.OPENED,
      price: "105.90"  
    },
  ]

  @Injectable({
    providedIn: 'root'
  })

export class TableService {
  data: Array<Record> = [...backup]

  constructor() { }

  getTableContent(){
    return this.data
  }

  removeRecord(id: number): Array<Record>{
    this.data.splice(id, 1)
    return this.data
  }

  restoreTable(){
    this.data = [...backup]
    return this.data
  }
}
