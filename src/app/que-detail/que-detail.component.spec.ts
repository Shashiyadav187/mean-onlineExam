import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueDetailComponent } from './que-detail.component';

describe('QueDetailComponent', () => {
  let component: QueDetailComponent;
  let fixture: ComponentFixture<QueDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
