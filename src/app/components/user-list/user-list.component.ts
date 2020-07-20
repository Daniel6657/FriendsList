import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserColumnNames } from '../../table-column-names/user-column-names';
import { ColumnNames } from '../../models/column-names-model';
import { Router } from '@angular/router';
import { RoutingPath } from 'app/routing-path';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  public users;
  public englishColumnNames;
  public displayedColumns;
  public selectedUser;
  constructor(private userService: UserService, private router: Router) { }

  //takes all users from userService and set as users
  //invoke function setColumnNames
  ngOnInit() {
    this.users = this.userService.getAll();
    this.setColumnNames(UserColumnNames);
  }

  //set selectedUser as parameter
  public onRowSelect(row) {
    this.selectedUser = row;
  }

  //navigate to users path with seleceted user id
  public navToUserDetails() {
    let selectedUserId = Object.values(this.selectedUser)[0];
    this.router.navigate(['./'+RoutingPath.users, selectedUserId]);
  }

  //set column names
  private setColumnNames(columnNames: ColumnNames) {
    this.englishColumnNames = columnNames.englishColumnNames;
    this.displayedColumns = columnNames.displayedColumns;
  }
}
