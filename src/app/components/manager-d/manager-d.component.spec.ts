import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDComponent } from './manager-d.component';

describe('ManagerDComponent', () => {
  let component: ManagerDComponent;
  let fixture: ComponentFixture<ManagerDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
