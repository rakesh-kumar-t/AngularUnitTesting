import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeptsComponent } from './depts.component';
import { By } from '@angular/platform-browser';

describe('DeptsComponent', () => {
  let component: DeptsComponent;
  let fixture: ComponentFixture<DeptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  // 1. Testing parent component should load without crashing
  it('should render parent component', () => {
    expect(component).toBeTruthy();
  });

  // 2. Testing child component should load without crashing
  it('should render child component - dept-details', () => {
    const childComponent = fixture.debugElement.query( By.css("app-dept-details") );
    expect(childComponent).toBeTruthy();
  });

  // 3. Testing child component's data
  it('should render child component with proper data', () => {
    const testObj:any = {deptno : 10,  dname : "Sales", loc : "Hyd"};
    const childComponent = fixture.debugElement.query( By.css("app-dept-details") );
    expect(childComponent.properties.deptObj).toEqual(testObj);
  });

// 4. Testing child component event -- output property
it('should perform child component event - onDeptRemoved', () => {
  const childComponent = fixture.debugElement.query( By.css("app-dept-details") );
  // console.log("Before Remove : " + component.depts.length);
  childComponent.triggerEventHandler('onDeptRemoved',10);
  // console.log("After Remove : " + component.depts.length);
  const result = component.depts.findIndex((item:any) => item.deptno == 10);
  expect(result).toEqual(-1);
});

  // 5. Testing Multiple child components
  it('should render multiple child components', () => {
    const childComponents = fixture.debugElement.queryAll( By.css("app-dept-details") );
    //console.log(childComponents.length);
    // console.log(childComponents[0].properties.deptObj.dname);
    expect(childComponents.length).toEqual(8);
  });


});
