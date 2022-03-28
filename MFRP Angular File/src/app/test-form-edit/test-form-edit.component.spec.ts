import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFormEditComponent } from './test-form-edit.component';

describe('TestFormEditComponent', () => {
  let component: TestFormEditComponent;
  let fixture: ComponentFixture<TestFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFormEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
