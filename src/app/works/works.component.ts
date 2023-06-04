import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {
  scrollHeight = false;
  elpolloloco = false;
  join = false;
  portfolio = false;

  ngOnInit() {
    setInterval(() => {
      let scrollPosition = window.scrollY;
      let totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      let scrollPercentage = (scrollPosition / totalHeight) * 100;
      if (scrollPercentage >= 53) {
        this.scrollHeight = true;
      }
      if (scrollPercentage <= 53) {
        this.scrollHeight = false;
      }
    }, 20);
  }


  hover(value) {
    if (value === 'join') {
      this.join = true;
    }

    if (value === 'elpolloloco') {
      this.elpolloloco = true;
    }
    if (value === 'portfolio') {
      this.portfolio = true;
    }
  }

  hoverEnd(value) {
    if (value === 'join') {
      this.join = false;
    }
    if (value === 'elpolloloco') {
      this.elpolloloco = false;
    }
    if (value === 'portfolio') {
      this.portfolio = false;
    }
  }

  redirect(value) {
    if (value === 'live_elpolloloco') {
      window.open(
        'https://marcel-herzog.developerakademie.net/elpolloloco/index.html'
      );
    }
    if (value === 'github_elpolloloco') {
      window.open(
        'https://github.com/MarcelDragZ/El-Pollo-Loco'
      );
    }
    if (value === 'live_join') {
      window.open(
        'https://marcel-herzog.developerakademie.net/join/html/index.html'
      );
    }
    if (value === 'github_join') {
      window.open(
        'https://github.com/MarcelDragZ/Join'
      );
    }
    if (value === 'live_ringoffire') {
      window.open(
        'https://marcel-herzog.developerakademie.net/ringoffire/'
      );
    }
    if (value === 'github_ringoffire') {
      window.open(
        'https://github.com/MarcelDragZ/RingOfFire'
      );
    }
  }
}
