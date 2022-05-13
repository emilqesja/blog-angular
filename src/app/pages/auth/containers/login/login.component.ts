import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;

  loginForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(event: Event) {
    this.authService
      .login(this.loginForm.value)
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          console.log('Log in', res);
          this.router.navigate(['blog']).then((r) => r);
        },
        error: (err) => {
          console.log('Error', err);
        },
      });
  }
}
