import { Component, OnInit, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
  _visibleMenu = true;
  visibleResponsive = false;

  ngOnInit(): void {
  this.getResponsiveWidth();
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
    }
    if (value === 'about') {
      this.about = true;
    }
    if (value === 'skills') {
      this.skills = true;
    }
    if (value === 'works') {
      this.works = true;
    }
    if (value === 'contact') {
      this.contact = true;
    }
  }

  hoverEnd(value) {
    if (value === 'home' && !this._visibleMenu) {
      this.home = false;
    }
    if (value === 'about' && !this._visibleMenu) {
      this.about = false;
    }
    if (value === 'skills' && !this._visibleMenu) {
      this.skills = false;
    }
    if (value === 'works' && !this._visibleMenu) {
      this.works = false;
    }
    if (value === 'contact' && !this._visibleMenu) {
      this.contact = false;
    }
  }

  scrollToView(value) {
    let element = document.getElementById(value);
    element.scrollIntoView({ behavior: 'smooth' });
  }

  visibleMenuText() {
    let responsive = this.getResponsiveWidth();
    if (responsive <= 550 && this.visibleMenu == true && this.visibleResponsive == true) {
      this.visibleMenu = false;
      this.visibleResponsive = false;
      return;
    }
    if (responsive <= 550 && this.visibleMenu == false && this.visibleResponsive == false) {
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

