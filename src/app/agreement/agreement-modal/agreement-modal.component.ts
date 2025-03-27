import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { initFlowbite, Datepicker, DatepickerOptions } from 'flowbite';
import { DOCUMENT } from '@angular/common';
import { Flowbite } from '../../decorators/flowbite.decorator';

@Component({
  selector: 'app-agreement-modal',
  imports: [
    FormsModule, 
    ReactiveFormsModule
  ],
  templateUrl: './agreement-modal.component.html',
  styleUrl: './agreement-modal.component.scss'
})

@Flowbite()

export class AgreementModalComponent implements OnInit, AfterViewInit {
  agreementForm : any;
  startDatepicker : any;
  endDatepicker : any;

  constructor(
    public fb: FormBuilder,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnInit(): void {
    // initFlowbite();

    this.agreementForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      department: ['', [Validators.required]],
      job_title: ['', [Validators.required]],
      start_date: ['', [Validators.required]],
      end_date: ['', [Validators.required]],
    });
  }

  ngAfterViewInit(): void {
    const $startDatepickerEl = this.document.getElementById('default-datepicker-start');
    const options : DatepickerOptions = {
        defaultDatepickerId: null,
        autohide: true,
        format: 'mm/dd/yyyy',
        maxDate: null,
        minDate: null,
        orientation: 'bottom',
        buttons: false,
        autoSelectToday: 0,
        title: null,
        rangePicker: false,
        onShow: () => {},
        onHide: () => {},
    };
  
    this.startDatepicker = new Datepicker($startDatepickerEl, options);
    const $endDatepickerEl = this.document.getElementById('default-datepicker-end');
    this.endDatepicker = new Datepicker($endDatepickerEl, options);
  }

  changeDate(id : string, element: any) {
    console.log(id);
    console.log(element);
  }

  add(value: object, valid: boolean) {
    console.log(this.startDatepicker.getDate());
    console.log(this.endDatepicker.getDate());
    console.log(value);
    console.log(valid);

    if (!valid) {
      return;
    }
  }
}
