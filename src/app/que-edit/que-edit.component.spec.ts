import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueEditComponent } from './que-edit.component';

describe('QueEditComponent', () => {
  let component: QueEditComponent;
  let fixture: ComponentFixture<QueEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
