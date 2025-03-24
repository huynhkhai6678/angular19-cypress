import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule, 
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm : any;
  showAlert : boolean = false;
  
  constructor(
    public fb: FormBuilder,
    public router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$')]]
    });
  }

  login(value : any, valid : boolean) {
    this.showAlert = false;
    if (!valid) {
      return;
    }

    if (value.email === 'admin@bbv.vn' && value.password === 'pass@Y78') {
      localStorage.setItem('isLogin', JSON.stringify(true));
      this.router.navigate(['dashboard']);
    } else {
      this.showAlert = true;
      localStorage.setItem('isLogin', JSON.stringify(false));
    }
  }

}
