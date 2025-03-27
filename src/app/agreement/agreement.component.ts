import { Component, OnInit } from '@angular/core';
import { AgreementModalComponent } from './agreement-modal/agreement-modal.component';
import { FlowbiteService } from '../services/flowbite.service';
import { initFlowbite } from 'flowbite';
import { Flowbite } from '../decorators/flowbite.decorator';

@Component({
  selector: 'app-agreement',
  imports: [
    AgreementModalComponent
  ],
  templateUrl: './agreement.component.html',
  styleUrl: './agreement.component.scss'
})

@Flowbite()

export class AgreementComponent implements OnInit {

  constructor(
    private flowbiteService: FlowbiteService,
  ) {}

  data = [
    {
      name: 'Test 1',
      department: 'test 444',
      title: 'test 444',
      start_date : '19/02/2025',
      end_date : '20/02/2025',
      status : 'Approved',
      created_date : '18/02/2025'
    },
    {
      name : 'Test 2',
      department: 'test 444',
      title: 'test 444',
      start_date : '19/02/2025',
      end_date : '20/02/2025',
      status : 'Not Approved',
      created_date : '18/02/2025'
    }
  ];

  readonly tableColumns = [
    ['name', 'Name'],
    ['department', 'Department'],
    ['title', 'Title'],
    ['start_date', 'Start Date'],
    ['end_date', 'End Date'],
    ['status', 'Status'],
    ['created_date', 'Created date'],
    ['action', 'Action'],
  ];

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }
}
