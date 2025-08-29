import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaHtml } from './pagina-html';

describe('PaginaHtml', () => {
  let component: PaginaHtml;
  let fixture: ComponentFixture<PaginaHtml>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaHtml]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaHtml);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
