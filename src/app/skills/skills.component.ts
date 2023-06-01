import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  scrollRange = false;
  frontend = true;
  backend = false;
  fullstack = false;

  ngOnInit() {
    setInterval(() => {
      let scrollPosition = window.scrollY;
      let totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      let scrollPercentage = (scrollPosition / totalHeight) * 100;
      if (scrollPercentage >= 28) {
        this.scrollRange = true;
      }
      if (scrollPercentage <= 28) {
        this.scrollRange = false;
      }
    }, 20);
  }

  changeView(value) {
    if (value === 'frontend') {
      this.frontend = true;
      this.backend = false;
      this.fullstack = false;
    }
    if (value === 'backend') {
      this.frontend = false;
      this.backend = true;
      this.fullstack = false;
    }
    if (value === 'fullstack') {
      this.frontend = false;
      this.backend = false;
      this.fullstack = true;
    }
  }
}
