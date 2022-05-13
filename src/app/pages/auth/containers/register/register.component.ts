import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  hide = true;

  registerForm: FormGroup = this.fb.group({
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
    event.preventDefault();
    this.authService
      .register(this.registerForm.value)
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          console.log('User Registered', res);
          this.router.navigate(['auth/login']).then((r) => r);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
