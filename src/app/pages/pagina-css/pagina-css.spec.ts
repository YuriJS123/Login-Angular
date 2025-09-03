import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCss } from './pagina-css';

describe('PaginaCss', () => {
  let component: PaginaCss;
  let fixture: ComponentFixture<PaginaCss>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaCss]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaCss);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
