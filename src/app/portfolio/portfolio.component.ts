
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  visibleResponsive: boolean;
  private subscription: Subscription;

  constructor(private sharedService: SharedService, public router: Router) {}

  ngOnInit(): void {
    this.subscription = this.sharedService.visibleResponsive$.subscribe(visibleResponsive => {
      this.visibleResponsive = visibleResponsive;
    });
  }
  ngOnDestroy(): void {

    // always remember to unsubscribe to prevent memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
