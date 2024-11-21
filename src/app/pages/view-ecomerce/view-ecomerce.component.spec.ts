import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEcomerceComponent } from './view-ecomerce.component';

describe('ViewEcomerceComponent', () => {
  let component: ViewEcomerceComponent;
  let fixture: ComponentFixture<ViewEcomerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEcomerceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEcomerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
