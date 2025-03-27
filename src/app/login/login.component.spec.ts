import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit form', () => {
    spyOn(component, 'login');
    let ele = fixture.debugElement.query(By.css('#login')).nativeElement;
    ele.click();

    expect(component.login).toHaveBeenCalled();
  });


  it('should submit form invalid', () => {
    component.loginForm.controls['email'].setValue('123');
    component.loginForm.controls['password'].setValue('12344444');
    expect(component.loginForm.valid).toBeFalse();
  });

  it('should submit form valid', () => {
    component.loginForm.controls['email'].setValue('admin@bbv.vn');
    component.loginForm.controls['password'].setValue('pass@Y78');
    expect(component.loginForm.valid).toBeTrue();
  });

  it('should submit form valid and login success', () => {
    component.loginForm.controls['email'].setValue('admin@bbv.vn');
    component.loginForm.controls['password'].setValue('pass@Y78');

    let ele = fixture.debugElement.query(By.css('#login')).nativeElement;
    ele.click();

    expect(mockRouter.navigate).toHaveBeenCalledWith(['dashboard']);
  });

});
