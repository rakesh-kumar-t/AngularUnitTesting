import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public uid: string = "admin";
  public pwd: string = "admin123";
  public result: string = "";

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  public  login_click():void
  {

   // console.log("Login button clicked : " + this.uid);

    let routeToRedirect:string  =  this.activatedRoute.snapshot.queryParams["returnUrl"];

    if(routeToRedirect == null)
    {
      routeToRedirect = "/";
    }


    // do ajax call to validate uid & pwd at server
    if(this.uid == "admin" && this.pwd == "admin123")
    {
     // console.log("Valid user credentials");
      sessionStorage.setItem("AUTH_TOKEN",  this.uid);
      // sessionStorage.setItem("UserRole",  "admin");
      this.router.navigate([routeToRedirect]);
      // this.router.navigateByUrl(routeToRedirect);
    }
    else
    {
      this.result  = "Invalid user id or password";
    }
  }

}
