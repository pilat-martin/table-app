import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectorRef,
  ViewChild,
  Inject
} from '@angular/core';

import { TableService } from 'src/app/services/table.service';
import { Record } from 'src/app/interfaces/record';
import { Subscription } from 'rxjs';
import {
  ClientSideDataSource,
  INovaFilteringOutputs,
  ISortedItem,
  SearchComponent,
  SorterDirection,
  DataSourceService,
  TableComponent
} from '@nova-ui/bits';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
  providers: [
    {
      provide: DataSourceService,
      useClass: TableService
    }
  ]
})

export class TableComponent_ implements OnInit, AfterViewInit, OnDestroy {
  records: Array<Record> = [];
  displayedColumns: Array<string> = ['name', 'email', 'item', 'remove'];
  outputsSubscription: Subscription;
  
  // sort
  @ViewChild(TableComponent) table: TableComponent<Record>;
  sortedColumn: ISortedItem = {
    sortBy: "name",
    direction: SorterDirection.ascending
  }

  // search
  searchTerm: string = '';
  @ViewChild("filteringSearch") filteringSearch: SearchComponent;

  selectedFilters: string[] = [];

  state: INovaFilteringOutputs = {
    repeat: {
      itemsSource: this.records,
    },
  };

  constructor(
    private tableService: TableService,
    public dataSourceService: ClientSideDataSource<Record>,
    public changeDetection: ChangeDetectorRef,
  ) {

  }

  ngOnInit(): void {
    this.records = this.tableService.getTableContent()
    this.dataSourceService.setData(this.records);
  }

  async ngAfterViewInit() {
    this.dataSourceService.registerComponent({
      search: {
        componentInstance: this.filteringSearch
      }
    })

    this.dataSourceService.registerComponent(this.table.getFilterComponents())

    this.outputsSubscription = this.dataSourceService.outputsSubject.subscribe((data: INovaFilteringOutputs) => {
      this.state = data;
      this.records = data.repeat?.itemsSource || [];
      this.changeDetection.detectChanges();
    })

    await this.dataSourceService.applyFilters();
  }

  ngOnDestroy(): void {
      this.outputsSubscription.unsubscribe();
  }

  removeRecord(element: Record): void {
    this.records = this.tableService.removeRecord(element);
  }

  restoreTable() {
    this.records = this.tableService.restoreTable();
  }

  async onSearch(value: string) {
    await this.dataSourceService.applyFilters();
  }

  async changePagination(){
    await this.dataSourceService.applyFilters();
  }

  async applyFilters(){
    await this.dataSourceService.applyFilters();
  }

  async sortData(sortedColumn: ISortedItem){
    this.sortedColumn = sortedColumn;
    await this.dataSourceService.applyFilters();
  }
}
