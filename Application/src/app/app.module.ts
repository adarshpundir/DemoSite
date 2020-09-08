import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventComponent } from './event/event.component';
import { SpecialEventComponent } from './special-event/special-event.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyMaterialModule } from './material.module';
import { DialogOverviewExampleDialog } from './register/dialog-overview-example-dialog';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventComponent,
    SpecialEventComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MyMaterialModule
   ],
  entryComponents: [DialogOverviewExampleDialog],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
