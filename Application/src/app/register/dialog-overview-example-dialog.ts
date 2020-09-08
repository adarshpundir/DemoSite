import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from './register.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'dialog-overview-example-dialog.html',
})
// tslint:disable-next-line: component-class-suffix
export class DialogOverviewExampleDialog {

    constructor(
        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
}