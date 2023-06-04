import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  home = true;
  about = true;
  skills = true;
  works = true;
  contact = true;
  homeHover = false;
  aboutHover = false;
  skillsHover = false;
  worksHover = false;
  contactHover = false;
  homeHoverr = false;
  aboutHoverr = false;
  skillsHoverr = false;
  worksHoverr = false;
  contactHoverr = false;
  _visibleMenu = true;
  visibleResponsive = false;

  constructor(private sharedService: SharedService, public router: Router) {}

  ngOnInit(): void {
    setInterval(() => {
      this.sharedService.setVisibleResponsive(this.visibleResponsive);
    }, 20);
    setInterval(() => {
      let scrollPosition = window.scrollY;
      let totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      let scrollPercentage = (scrollPosition / totalHeight) * 100;
      if (scrollPercentage >= 0) {
        this.hoverHome();
      }
      if (scrollPercentage >= 15) {
        this.hoverAbout();
      }
      if (scrollPercentage >= 45) {
        this.hoverSkills();
      }
      if (scrollPercentage >= 65) {
        this.hoverWorks();
      }
      if (scrollPercentage >= 90) {
        this.hoverContact();
      }
    }, 20);

    this.getResponsiveWidth();
  }

  hoverHome() {
    this.homeHover = true;
    this.aboutHover = false;
    this.skillsHover = false;
    this.worksHover = false;
    this.contactHover = false;
  }

  hoverAbout() {
    this.aboutHover = true;
    this.homeHover = false;
    this.skillsHover = false;
    this.worksHover = false;
    this.contactHover = false;
  }

  hoverSkills() {
    this.aboutHover = false;
    this.homeHover = false;
    this.skillsHover = true;
    this.worksHover = false;
    this.contactHover = false;
  }

  hoverWorks() {
    this.aboutHover = false;
    this.homeHover = false;
    this.skillsHover = false;
    this.worksHover = true;
    this.contactHover = false;
  }
  hoverContact() {
    this.aboutHover = false;
    this.homeHover = false;
    this.skillsHover = false;
    this.worksHover = false;
    this.contactHover = true;
  }

  get visibleMenu(): boolean {
    return this._visibleMenu;
  }

  set visibleMenu(value: boolean) {
    if (value !== this._visibleMenu) {
      this._visibleMenu = value;
      this.home = value;
      this.about = value;
      this.skills = value;
      this.works = value;
      this.contact = value;
    }
  }

  hover(value) {
    if (value === 'home') {
      this.home = true;
      this.homeHoverr = true;
    }
    if (value === 'about') {
      this.about = true;
      this.aboutHoverr = true;
    }
    if (value === 'skills') {
      this.skills = true;
      this.skillsHoverr = true;
    }
    if (value === 'works') {
      this.works = true;
      this.worksHoverr = true;
    }
    if (value === 'contact') {
      this.contact = true;
      this.contactHoverr = true;
    }
  }

  hoverEnd(value) {
    if (value === 'home' && !this._visibleMenu) {
      this.home = false;
      this.homeHoverr = false;
    }
    if (value === 'about' && !this._visibleMenu) {
      this.about = false;
      this.aboutHoverr = false;
    }
    if (value === 'skills' && !this._visibleMenu) {
      this.skills = false;
      this.skillsHoverr = false;
    }
    if (value === 'works' && !this._visibleMenu) {
      this.works = false;
      this.worksHoverr = false;
    }
    if (value === 'contact' && !this._visibleMenu) {
      this.contact = false;
      this.contactHoverr = false;
    } else {
      this.homeHoverr = false;
      this.aboutHoverr = false;
      this.skillsHoverr = false;
      this.worksHoverr = false;
      this.contactHoverr = false;
    }
  }

  scrollToView(value) {
    let element = document.getElementById(value);
    element.scrollIntoView({ behavior: 'smooth' });
    this.visibleResponsive = false;
  }

  visibleMenuText() {
    let responsive = this.getResponsiveWidth();
    if (
      responsive <= 550 &&
      this.visibleMenu == true &&
      this.visibleResponsive == true
    ) {
      this.visibleMenu = false;
      this.visibleResponsive = false;
      return;
    }
    if (
      responsive <= 550 ||
      this.visibleMenu == false &&
      this.visibleResponsive == false
    ) {
      this.visibleMenu = true;
      this.visibleResponsive = true;
      this.home = true;
      this.about = true;
      this.skills = true;
      this.works = true;
      this.contact = true;
      return;
    }
    if (this.visibleMenu == true) {
      this.visibleMenu = false;
      return;
    }
    if (this.visibleMenu == false) {
      this.visibleMenu = true;
      return;
    }
  }

  getResponsiveWidth() {
    let screenWidth = window.innerWidth;
    return screenWidth;
  }
}
