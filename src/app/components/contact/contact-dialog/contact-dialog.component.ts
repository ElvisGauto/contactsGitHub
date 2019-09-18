import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss']
})
export class ContactDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ContactDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
