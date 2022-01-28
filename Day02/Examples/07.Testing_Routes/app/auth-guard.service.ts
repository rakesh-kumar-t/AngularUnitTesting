import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router:Router) { }

  public canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean
  {
    // alert("Message canActivate method from AuthGuard Service");

    // check -- is user authenticated?
    if( sessionStorage.getItem("AUTH_TOKEN")   == null)
    {
        // redirect to login
        this.router.navigate(["/Login"], {queryParams : {"returnUrl":state.url}});
        return false;
    }
    else
    {
      // proceed with the requested route
      return true;
    }
  }

}
