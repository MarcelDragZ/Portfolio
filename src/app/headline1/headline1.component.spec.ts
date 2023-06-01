import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Headline1Component } from './headline1.component';

describe('Headline1Component', () => {
  let component: Headline1Component;
  let fixture: ComponentFixture<Headline1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Headline1Component]
    });
    fixture = TestBed.createComponent(Headline1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
