
import { NgModule } from  '@angular/core';
// tslint:disable-next-line: max-line-length
import {MatNativeDateModule,MatSnackBarModule,MatIconModule,MatDialogModule, MatButtonModule, MatTableModule, MatPaginatorModule , MatSortModule,MatTabsModule, MatCheckboxModule, MatToolbarModule, MatCard, MatCardModule, MatFormField, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule } from  '@angular/material';
import {MatDatepickerModule}  from  '@angular/material/datepicker';
import {MatRadioModule} from  '@angular/material/radio';
import {MatSelectModule}  from  '@angular/material/select';
import {MatSliderModule} from  '@angular/material/slider';
import {MatDividerModule} from  '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
// tslint:disable-next-line: max-line-length
    imports: [MatProgressBarModule,MatTabsModule,MatDividerModule,MatSliderModule,MatSelectModule,MatRadioModule,MatNativeDateModule,MatDatepickerModule,MatSnackBarModule,MatIconModule,MatDialogModule,MatProgressSpinnerModule,MatButtonModule,MatSortModule,MatTableModule,MatTabsModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatPaginatorModule],
// tslint:disable-next-line: max-line-length
    exports: [MatProgressBarModule,MatTabsModule,MatDividerModule,MatSliderModule,MatSelectModule,MatRadioModule,MatNativeDateModule,MatDatepickerModule,MatSnackBarModule,MatIconModule,MatDialogModule,MatProgressSpinnerModule,MatButtonModule,MatSortModule, MatCheckboxModule, MatToolbarModule, MatCardModule,MatTableModule,MatTabsModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatPaginatorModule],

})

export  class  MyMaterialModule { }
