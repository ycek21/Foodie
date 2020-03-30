import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home-paage',
  templateUrl: './home-paage.component.html',
  styleUrls: ['./home-paage.component.css']
})
export class HomePaageComponent implements OnInit {
  form: FormGroup;
  helper = new JwtHelperService();
  constructor(
    private fb: FormBuilder,
    private service: RegisterService,
    private router: Router,
    private snack: MatSnackBar
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {
    console.log(sessionStorage.getItem);

    const val = this.form.value;
    console.log(val);
    this.service.login(val).subscribe(
      (reponse: any) => {
        if (reponse.token !== undefined) {
          localStorage.setItem('access_token', reponse.token);
          localStorage.setItem('user_id', reponse.userId);
          this.router.navigateByUrl('recipes');
        }
      },
      (error: any) => {
        console.log(error.error);
        this.snack.open('Account is not confirmed ', '', {
          duration: 4000,
          panelClass: ['snackbar-wrong'],
          verticalPosition: 'top'
        });
      }
    );
  }
}
