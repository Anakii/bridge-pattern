/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InnerOneComponent } from './innerOne.component';

describe('InnerOneComponent', () => {
  let component: InnerOneComponent;
  let fixture: ComponentFixture<InnerOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
