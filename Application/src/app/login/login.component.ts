import { Component, OnInit, Input, Inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from './dialog-overview-example-dialog';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

export interface DialogData {
  username: string;
  message: string;
}



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  logInForm: FormGroup;
  clickregister: boolean;
  success: boolean;
  result: DialogData = { username: "", message: "" };
  errorMessage: String;
  errorFlag: boolean;

  matcher = new MyErrorStateMatcher();

  ngOnInit() {
    this.logInForm = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
  }

  logInUser(logInForm) {
    this.clickregister = true;
    console.dir(logInForm);
    this.auth.logInUser(logInForm.value).subscribe(
      (res) => {
        console.log(res);
        this.success = true;
        this.result = res;
        console.log("logged in");
        this.openDialog();
      },
      (err) => {
        console.log(err.error.message);
        this.errorFlag = true;
        this.errorMessage = err.error.message;
      }
    );
  }

  openDialog(): void {
    this.router.navigate(["/special"]);
  }
}



