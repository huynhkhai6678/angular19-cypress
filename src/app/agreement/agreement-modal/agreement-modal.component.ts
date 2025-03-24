import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-agreement-modal',
  imports: [
    FormsModule, 
    ReactiveFormsModule
  ],
  templateUrl: './agreement-modal.component.html',
  styleUrl: './agreement-modal.component.scss'
})
export class AgreementModalComponent implements OnInit {
  agreementForm : any;

  constructor(
    public fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    initFlowbite();

    this.agreementForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      department: ['', [Validators.required]],
      job_title: ['', [Validators.required]],
      start_date: ['', [Validators.required]],
      end_date: ['', [Validators.required]],
      agreement: ['', [Validators.required]],
    });
  }

  add(value: object, valid: boolean) {
    console.log(value);
    console.log(valid);
  }

}
