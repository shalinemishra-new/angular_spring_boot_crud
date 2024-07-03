import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudnetOperationComponent } from './studnet-operation.component';

describe('StudnetOperationComponent', () => {
  let component: StudnetOperationComponent;
  let fixture: ComponentFixture<StudnetOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudnetOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudnetOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
