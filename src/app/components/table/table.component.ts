import { Component, OnInit } from '@angular/core';
import { TableService } from "src/app/services/table.service";
import { Record } from "src/app/interfaces/record";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
  data: Array<Record> = []

  constructor(private ts: TableService) { }

  ngOnInit(): void {
    this.data = this.ts.getTableContent()
  }

  removeRecord(id: number): void{
    this.data = this.ts.removeRecord(id)
  }

  restoreTable(){
    this.data = this.ts.restoreTable()
  }

}
