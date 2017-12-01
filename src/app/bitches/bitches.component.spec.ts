import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitchesComponent } from './bitches.component';

describe('BitchesComponent', () => {
  let component: BitchesComponent;
  let fixture: ComponentFixture<BitchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
