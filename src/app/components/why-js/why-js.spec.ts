import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyJs } from './why-js';

describe('WhyJs', () => {
  let component: WhyJs;
  let fixture: ComponentFixture<WhyJs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyJs],
    }).compileComponents();

    fixture = TestBed.createComponent(WhyJs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
