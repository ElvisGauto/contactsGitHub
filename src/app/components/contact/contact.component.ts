import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'; 
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent{

  formContact: FormGroup;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.formContact = this.fb.group({
      name: ['', [ Validators.required, Validators.maxLength(50) ]],
      email: ['', [Validators.required,
        /* tslint:disable */
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
        /* tslint:enable */
      phone: ['', [ Validators.required, Validators.maxLength(15) ]],
      message: ['', [Validators.maxLength(120)]]
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // sendData() {
  //   alert("Data sent! ready, we'll be in touch soon");
  // }

}
