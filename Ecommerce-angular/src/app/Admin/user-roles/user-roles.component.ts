import { Component, Input, OnInit } from '@angular/core';
import { UserRoleModel } from '../../models/userRoleModel';
import { AdminService } from '../../services/Admin.service';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.css']
})
export class UserRolesComponent implements OnInit {

  constructor(private adminSer: AdminService) { }

  @Input() search = '';
  userRoles: UserRoleModel[];
  ngOnInit(): void {
    this.userRoles = null;
    this.GetUserRole();
  }

  GetUserRole(){
    this.adminSer.GetUserRole().subscribe(list => {
      this.userRoles = list;
    }, err => console.log(err));
  }

}
