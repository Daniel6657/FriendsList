import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-data-table',
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
  private selection: SelectionModel<any>;

  constructor() { }

  ngOnChanges() {
    this.init();
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.toString().trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private emitSelected() {
    this.onSelect.emit(this.selection.selected[0]);
  }

  private init() {
    this.displayedColumns = [];
    this.selection = new SelectionModel<any>(false, []);
    this.displayedColumns.splice(0, 0, "select");
    this.columnNames.forEach(r => this.displayedColumns.push(r));
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.applyFilter("");
    this.dataSource.data = this.dataSource.data;
    }
  }
