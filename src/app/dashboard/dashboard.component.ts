import { Component, OnInit } from '@angular/core';
import { FlowbiteService } from '../services/flowbite.service';
import { initFlowbite } from 'flowbite';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  constructor(
    private flowbiteService: FlowbiteService,
    private router: Router
  ) {}

  ngOnInit() {
    var isLogin = localStorage.getItem('isLogin');
    if (!isLogin) {
      this.router.navigate(['login']);
    }
    console.log(isLogin);
  }
}
