import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import {routes} from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let router:Router;
  let location:Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();


    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });


  it('should go to "Home" when use request with emtpy url', () => {
    router.navigate([""]).then( () =>
    {
      expect(location.path()).toBe('/');
    });

     expect("").toBe("");
  });


  it('should go to "Aboutus" when user request for "/Aboutus" url', () => {
    router.navigate(["/Aboutus"]).then( () =>
    {
      const tagObj  =  fixture.nativeElement.querySelector("h1");
      expect(location.path()).toBe('/Aboutus');
      expect(tagObj.textContent).toBe("About Us");
    });

     expect("").toBe("");
  });



  it('should go to "Login" when user request for "/Depts" route', () => {

    sessionStorage.removeItem("AUTH_TOKEN");

    router.navigate(["/Depts"]).then( () =>
    {
      // expect(location.path()).toContain('/Login');
      expect(location.path()).toEqual('/Login?returnUrl=%2FDepts');
    });

     expect("").toBe("");
  });


// Testing secured routes
 //   "/depts"  --->    "/login"   ---->  "/Depts"
  it('should go to "Depts" page after login successfully', fakeAsync(() => {

    sessionStorage.removeItem("AUTH_TOKEN");

    router.navigate(["/Depts"]).then( () =>
    {
      expect(location.path()).toEqual('/Login?returnUrl=%2FDepts');

      const inputArray = fixture.nativeElement.querySelectorAll('input');
      inputArray[0].value = "admin";
      inputArray[0].dispatchEvent(new Event("input"));

      inputArray[1].value = "admin123";
      inputArray[1].dispatchEvent(new Event("input"));

      const buttonObj = fixture.nativeElement.querySelector('button');
      buttonObj.dispatchEvent(new Event("click"));
      fixture.detectChanges();

      tick(3000);

      expect(location.path()).toEqual('/Depts');
    });

     expect("").toBe("");
  }));


  it('should go to "Details" with route parameter', () => {

    router.navigate(["/Details/1025"]).then( () =>
    {
      expect(location.path()).toEqual('/Details/1025');
      const tagObj  =  fixture.nativeElement.querySelector("h2");
      expect(tagObj.textContent).toBe("Selected Employee Details");
    });

     expect("").toBe("");
  });




});
