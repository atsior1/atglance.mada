import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationDescComponent } from './destination-desc.component';

describe('DestinationDescComponent', () => {
  let component: DestinationDescComponent;
  let fixture: ComponentFixture<DestinationDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
