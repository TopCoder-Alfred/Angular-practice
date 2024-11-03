import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users'

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  selectUser = DUMMY_USERS[randomIndex]

  get imgPath() {
    return "assets/users/" + this.selectUser.avatar;
  }
  
  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectUser = DUMMY_USERS[randomIndex];
  }
}
