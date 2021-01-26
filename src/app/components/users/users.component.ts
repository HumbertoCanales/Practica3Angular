import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/animations/animations';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [ fade ]
})
export class UsersComponent implements OnInit {

  arrUsers: any[] = [];

  constructor(private usersService: UsersService ) { }

  ngOnInit(): void {
    this.usersService.getAll()
    .then(users => this.arrUsers = users)
    .catch(error => console.log(error));
  }

}
