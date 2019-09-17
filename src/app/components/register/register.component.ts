import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{

  formRegister: FormGroup;

  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit() {
    this.formRegister = this.fb.group({
      name: ['', [ Validators.required ]],
      email: ['', [Validators.required,
        /* tslint:disable */
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
        /* tslint:enable */
      phone: ['', [ Validators.required ]],
      message: ['', [Validators.maxLength(120)]]
    });
  }

  sendData() {
    alert('¡Datos enviados! listo, pronto estaremos en contacto')
  }

}
