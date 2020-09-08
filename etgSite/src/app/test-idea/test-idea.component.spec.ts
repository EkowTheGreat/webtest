import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIdeaComponent } from './test-idea.component';

describe('TestIdeaComponent', () => {
  let component: TestIdeaComponent;
  let fixture: ComponentFixture<TestIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
