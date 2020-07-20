import { Injectable } from '@angular/core';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] =
    [
      {
        userId: 1, firstName: 'Daniel', lastName: 'Chutkowski', age: 22,
        nationality: 'Poland', phoneNumber: '535-714-158', email: 'daniel.chutkowski@gmail.com',
        favouriteColor: 'Blue', favouriteFood: 'Penne with salmon in oyster sauce'
      },
      {
        userId: 2, firstName: 'Weronika', lastName: 'Zaprawa', age: 20,
        nationality: 'USA', phoneNumber: '186-458-114', email: 'weronika.zaprawa@gmail.com',
        favouriteColor: 'Pink', favouriteFood: 'Shrimp'
      },
      {
        userId: 3, firstName: 'Dominik', lastName: 'Przytuła', age: 22,
        nationality: 'Poland', phoneNumber: '554-326-889', email: 'dominik.przytula@gmail.com',
        favouriteColor: 'Black', favouriteFood: 'Steak'
      },
      {
        userId: 4, firstName: 'Oskar', lastName: 'Czubacki', age: 21,
        nationality: 'Poland', phoneNumber: '776-212-346', email: 'oskar.czubacki@gmail.com',
        favouriteColor: 'Green', favouriteFood: 'Caesar salad'
      },
      {
        userId: 5, firstName: 'Ryszard', lastName: 'Rogalski', age: 21,
        nationality: 'France', phoneNumber: '454-721-286', email: 'ryszard.rogalski@gmail.com',
        favouriteColor: 'Yellow', favouriteFood: 'Sandwich'
      },
      
      {
        userId: 6, firstName: 'Kinga', lastName: 'Mikolajczuk', age: 19,
        nationality: 'United Kingdom', phoneNumber: '281-636-414', email: 'kinga.mikolajczuk@gmail.com',
        favouriteColor: 'Navy Green', favouriteFood: 'French fries'
      },
    ];
  constructor() { }

  // return all users as object array
  public getAll() {
    return this.users;
  }

  // return user with id same as passed as parameter id,
  // if none user match returns undefined
  public getOne(userId) {
    return this.users.find(r => r.userId == userId);
  }

}
