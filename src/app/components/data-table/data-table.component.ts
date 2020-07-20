//#HowToUse
//This component takes 
// [dataSource], [displayedColumns] and [englishColumnNames]\
// as input parameters 
// dataSource is an array of objects,
// displayedColumns is array of strings as object properies names that should be displayed
// englishColumnNames is array of strings as names of columns that would be displayed
// Component emits selected object as output named (onSelect)
// #example
// [displayedColumns] eg.:  
// displayedColumns: string[] =
    // [
    //   "lastName", "firstName", "nationality"
    // ];
    //
// [englishColumnNames] eg.:
// englishColumnNames: string[] =
//     [
//       "Last name", "First name", "Nationality"
//     ];
//
//Usage example :
// <data-table class="tab-content"
// [dataSource]="users"
// [displayedColumns]="displayedColumns"
// [englishColumnNames]="englishColumnNames"
// (onSelect)="onRowSelect($event)">
// </data-table>


import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @Input("displayedColumns") columnNames: string[];
  @Input("englishColumnNames") englishColumnNames: string[];
  @Input("dataSource") data;
  @Output("onSelect") onSelect = new EventEmitter();

  public isArrayEmpty: boolean;
  public dataSource: MatTableDataSource<any>;
  public displayedColumns;
  public selection: SelectionModel<any>;
  public rowIdKey;

  constructor() { }

  ngOnChanges() {
    this.init();
  }

  //filter displayed data by parameter
  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.toString().trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //emits selected object
  public emitSelected() {
    this.onSelect.emit(this.selection.selected[0]);
  }

  //initialize dataTable
  //sets dataSource, selectionModel, columnNames, 
  //sort, paginator, and rowIdKey
  //used in ngOnChanges would adapt dataTable to input fields change
  private init() {
    this.displayedColumns = [];
    this.selection = new SelectionModel<any>(false, []);
    if(this.displayedColumns[0]!="select"){
      this.displayedColumns.splice(0, 0, "select");
    }
    this.columnNames.forEach(r => this.displayedColumns.push(r));
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.applyFilter("");
    this.dataSource.data = this.dataSource.data;
    this.rowIdKey = Object.keys(this.dataSource.data[0])[0];
    }
  }
