/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InnerTwoComponent } from './innerTwo.component';

describe('InnerTwoComponent', () => {
  let component: InnerTwoComponent;
  let fixture: ComponentFixture<InnerTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
