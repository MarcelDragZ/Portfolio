import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Headline3Component } from './headline3.component';

describe('Headline3Component', () => {
  let component: Headline3Component;
  let fixture: ComponentFixture<Headline3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Headline3Component]
    });
    fixture = TestBed.createComponent(Headline3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
