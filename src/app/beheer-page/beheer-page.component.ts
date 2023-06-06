import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IUser } from 'src/models/userInterface';
import { UserService } from 'src/services/user-service.service';

@Component({
  selector: 'app-beheer-page',
  templateUrl: './beheer-page.component.html',
  styleUrls: ['./beheer-page.component.scss'],
})
export class BeheerPageComponent {
  users: IUser[];

  form = new FormGroup({
    hideActive: new FormControl(''),
    filterName: new FormControl(''),
    selectedUser: new FormControl(''),
  });

  constructor(private userService: UserService) {
    this.users = this.userService.getAllUsers();

    this.form.valueChanges.subscribe((d) => console.log(d));
  }
}
