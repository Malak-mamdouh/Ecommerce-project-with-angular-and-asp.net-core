import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardGaurdService implements CanActivate {

  constructor(private route: Router, private auth: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    const token = !!localStorage.getItem('token');
    const roleName = this.auth.role;
    if (token){
      if (roleName.toLowerCase() !== 'admin'){
        this.route.navigate(['notFound']).then(x => {window.location.reload(); });
      }
      return true;
    }else{
      this.route.navigate(['notFound']);
      return false;
    }
    
  }
}
