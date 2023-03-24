import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcardComponent } from './icard.component';

describe('IcardComponent', () => {
  let component: IcardComponent;
  let fixture: ComponentFixture<IcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
