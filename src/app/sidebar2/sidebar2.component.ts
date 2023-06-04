import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar2',
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.scss']
})
export class Sidebar2Component {


  constructor(public router: Router) {}

changeToHome() {
  this.router.navigate(['/']);
}
}
