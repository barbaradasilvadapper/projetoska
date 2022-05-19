import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeComponentComponent } from './cidade-component.component';

describe('CidadeComponentComponent', () => {
  let component: CidadeComponentComponent;
  let fixture: ComponentFixture<CidadeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CidadeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
