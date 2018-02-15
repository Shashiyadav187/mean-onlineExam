import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueCreateComponent } from './que-create.component';

describe('QueCreateComponent', () => {
  let component: QueCreateComponent;
  let fixture: ComponentFixture<QueCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
