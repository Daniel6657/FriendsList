import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'app/services/user.service';
import { User } from 'app/models/user-model';
import { RoutingPath } from 'app/routing-path';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  public userFirstName :string;
  public userLastName : string;
  public userForm;
  private user: User;
  private selectedUserId: string;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService,
    private router:Router, private formBuilder: FormBuilder) { }

    //get userId from URL
    //invoke setUserInformation and setUserForm functions
    //set values to form controls
  ngOnInit() {
    this.selectedUserId = this.activatedRoute.snapshot.paramMap.get("userId");
    this.setUserInformation();
    this.setUserForm();
    this.userForm.patchValue(
      {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        age: this.user.age,
        nationality: this.user.nationality,
        favouriteColor: this.user.favouriteColor,
        favouriteFood: this.user.favouriteFood,
        phoneNumber: this.user.phoneNumber,
        email: this.user.email
      }
    );
  }

  // navigate to users path
  public navToUsersTable() {
    this.router.navigate(['./'+RoutingPath.users]);
  }

  // set user, userFistName and userLast name fields by id from URL, 
  //if user with that id does not exists, alert with suitable description is shown
  private setUserInformation() {
    this.user = this.userService.getOne(this.selectedUserId);
    if(!this.user) {
      alert("Could not find user with that id, try to pick someone from table, instead of changing URL");
      this.navToUsersTable();
    } else {
    this.userFirstName = this.user.firstName;
    this.userLastName = this.user.lastName;
    }
  }

  //set userForm setting all fields as disabled
  private setUserForm() {
    this.userForm = this.formBuilder.group({
      firstName: [{value: '',disabled: true}],
      lastName: [{value: '',disabled: true}],
      age: [{value: '',disabled: true}],
      nationality: [{value: '',disabled: true}],
      favouriteColor: [{value: '',disabled: true}],
      favouriteFood: [{value: '',disabled: true}],
      phoneNumber: [{value: '',disabled: true}],
      email: [{value: '',disabled: true}],
    });
  }
}
