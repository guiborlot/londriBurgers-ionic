import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheCupomPage } from './detalhe-cupom.page';

describe('DetalheCupomPage', () => {
  let component: DetalheCupomPage;
  let fixture: ComponentFixture<DetalheCupomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheCupomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheCupomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
