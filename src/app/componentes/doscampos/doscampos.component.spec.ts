import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoscamposComponent } from './doscampos.component';

describe('DoscamposComponent', () => {
  let component: DoscamposComponent;
  let fixture: ComponentFixture<DoscamposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoscamposComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoscamposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
