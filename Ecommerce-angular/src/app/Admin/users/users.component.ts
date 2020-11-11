import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AdminService } from '../../services/Admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private adminSer: AdminService) { }

  @Input() search = '';
  users: User[];
  ngOnInit(): void {
    this.users = null;
    this.GetUsers();
  }

  GetUsers(){
    this.adminSer.GetAllUsers().subscribe(list => {
      this.users = list;
    }, err => console.log(err));
  }
}
