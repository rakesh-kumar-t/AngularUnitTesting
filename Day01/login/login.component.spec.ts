import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //1. Component load without carashing
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //2. Testing component properites
  it('should uid contains empty as a default value', () => {
    let str = component.uid;
    expect(str).toBe("");
  });

  //3. Testing component properites
  it('should result contains empty as a default value', () => {
    let str = component.result;
    expect(str).toBe("");
  });

 //4. Testing component methods
 it('should generate correct message for invalid user id or password', () => {
    component.uid =  "hello";
    component.pwd =  "hello123";
    component.loginButton_click();
    let str  = component.result;
    expect(str).toBe("Invalid user id or password");
});


//5. Testing component methods
 it('should generate welcome message for valid user id and password', () => {
  component.uid =  "admin";
  component.pwd =  "admin123";
  component.loginButton_click();
  let str  = component.result;
  expect(str).toBe("Welcome to Admin");
});


//6. Testing component templates --- access html tags
it('should generate "User Login" in legend tag', () => {
  const tagObj  =  fixture.nativeElement.querySelector("legend");
  // console.log(tagObj.textContent);
  let str  = tagObj.textContent;
  expect(str).toBe("User Login");
});


//7. Testing component templates --- access html tags bind with variables
it('should generate empty in result paragraph', () => {
  const tagObj  =  fixture.nativeElement.querySelector("p");
  let str  = tagObj.textContent;
  expect(str).toBe("");
});

//8. Testing component templates --- input fields
it('should set the value User Id textbox', () => {
  const inputObj  =  fixture.nativeElement.querySelector("input");
  inputObj.value = "Scott"; // set
  let str = inputObj.value; //get
  expect(str).toBe("Scott");
});


//9. Testing component templates --- 2-way data binding
it('should set the value to component variable using textbox', () => {
  const inputObj  =  fixture.nativeElement.querySelector("input");
  inputObj.value = "Scott"; // set
  inputObj.dispatchEvent( new Event("input") ); // reflect two-way data binding
  let str = component.uid;
  expect(str).toBe("Scott");
});


//10. Testing component templates --- button click event
it('should generate invalid message when user click the button without textbox values', () => {
  const inputArray =  fixture.nativeElement.querySelectorAll("input");

  inputArray[2].dispatchEvent( new Event("click") );

  // console.log(component.result);

  fixture.detectChanges();
  const tagObj  =  fixture.nativeElement.querySelector("p");
  let str  = tagObj.textContent;
  expect(str).toBe("Invalid user id or password");
});


//11. Testing component templates --- button click event
it('should generate Welcome message for valid credentials when user click login button', () => {
  const inputArray =  fixture.nativeElement.querySelectorAll("input");

  inputArray[0].value = "admin"; // set
  inputArray[0].dispatchEvent( new Event("input") ); // reflect two-way data binding

  inputArray[1].value = "admin123"; // set
  inputArray[1].dispatchEvent( new Event("input") ); // reflect two-way data binding

  inputArray[2].dispatchEvent( new Event("click") );
  fixture.detectChanges();



  const tagObj  =  fixture.nativeElement.querySelector("p");
  let str  = tagObj.textContent;
  expect(str).toBe("Welcome to Admin");
});


//12. Testing component templates --- button click event
it('should generate Invalid message for invalid credentials when user click login button', () => {
  const inputArray =  fixture.nativeElement.querySelectorAll("input");

  inputArray[0].value = "scott"; // set
  inputArray[0].dispatchEvent( new Event("input") ); // reflect two-way data binding

  inputArray[1].value = "hello123"; // set
  inputArray[1].dispatchEvent( new Event("input") ); // reflect two-way data binding

  inputArray[2].dispatchEvent( new Event("click") );
  fixture.detectChanges();


  const tagObj  =  fixture.nativeElement.querySelector("p");
  let str  = tagObj.textContent;
  expect(str).toBe("Invalid user id or password");
});

});
