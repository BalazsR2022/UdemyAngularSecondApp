import { Component } from '@angular/core';

import { DUMMY_USERS } from 'src/app/dummy.users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)


@Component({
  selector: 'app-user',
  standalone: true,

  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  selectedUser = DUMMY_USERS [randomIndex];

}
