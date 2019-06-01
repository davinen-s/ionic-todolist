import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedTodosPage } from './archived-todos.page';

describe('ArchivedTodosPage', () => {
  let component: ArchivedTodosPage;
  let fixture: ComponentFixture<ArchivedTodosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivedTodosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedTodosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
