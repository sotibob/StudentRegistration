import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterclassComponent } from './registerclass.component';

describe('RegisterclassComponent', () => {
  let component: RegisterclassComponent;
  let fixture: ComponentFixture<RegisterclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterclassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
