import { Component, OnInit, Input, Inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from './dialog-overview-example-dialog';
import {  Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material';

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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private auth: AuthService, private fb: FormBuilder, public dialog: MatDialog,private router: Router) { }

  registrationForm: FormGroup;
  clickregister: boolean;
  success: boolean;
  result: DialogData={username:'',message:''};
  errorFlag:boolean;
  errorMessage:String;
  matcher = new MyErrorStateMatcher();


  ngOnInit() {
    this.registrationForm = this.fb.group(
      {
        username: ['',[Validators.required]],
        password: ['',[Validators.required, Validators.minLength(8)]],
        email: ['',[Validators.required,Validators.email]],
        phoneno: ['', [Validators.required, Validators.pattern('[0-9]{10}')]]
      }
    )
  }

  registerUser(registrationForm)
  {
    this.clickregister = true ; 
    console.dir(registrationForm)
    this.auth.registerUser(registrationForm.value)
      .subscribe(
        (res) =>{ console.log(res)
                  this.success = true;
                  this.result.username= res.username;
                  this.openDialog()
        },
       (err) => {
         console.log(err.error);
         this.errorFlag = true;
         this.errorMessage = err.error.message;
        }
      )
  }

  openDialog(): void {
    const dialogRef = this.dialog.open( DialogOverviewExampleDialog, {
      width: '250px',
      data: {username:this.result.username, message:'sucessfully registered' }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/register']);
      console.log('The dialog was closed');
    });
  }

}



