import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTimeComponent } from './get-time.component';

describe('GetTimeComponent', () => {
  let component: GetTimeComponent;
  let fixture: ComponentFixture<GetTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
