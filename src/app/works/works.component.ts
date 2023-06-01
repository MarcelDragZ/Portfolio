import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {
  scrollHeight = false;

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

  openWork(value) {
    if (value === 'elpolloloco') {
      window.open(
        'https://marcel-herzog.developerakademie.net/elpolloloco/index.html'
      );
    }
    if (value === 'join') {
      window.open(
        'https://marcel-herzog.developerakademie.net/join/html/index.html'
      );
    }
    if (value === 'ringoffire') {
      window.open('https://marcel-herzog.developerakademie.net/ringoffire/');
    }
  }
}
