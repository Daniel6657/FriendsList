import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserColumnNames } from '../../table-column-names/user-column-names';
import { ColumnNames } from '../../models/column-names-model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  private users;
  private englishColumnNames;
  private displayedColumns;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getAll();
    this.setColumnNames(UserColumnNames);
  }

  private setColumnNames(columnNames: ColumnNames) {
    this.englishColumnNames = columnNames.englishColumnNames;
    this.displayedColumns = columnNames.displayedColumns;
  }

  private onRowSelect(row) {
    console.log(row);
  }
}
