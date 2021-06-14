import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasiliskComponent } from './basilisk.component';

describe('BasiliskComponent', () => {
  let component: BasiliskComponent;
  let fixture: ComponentFixture<BasiliskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasiliskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasiliskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
