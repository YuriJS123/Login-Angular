import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubDeLinguagens } from './hub-de-linguagens';

describe('HubDeLinguagens', () => {
  let component: HubDeLinguagens;
  let fixture: ComponentFixture<HubDeLinguagens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HubDeLinguagens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HubDeLinguagens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
