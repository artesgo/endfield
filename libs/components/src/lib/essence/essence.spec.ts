import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Essence } from './essence';

describe('Essence', () => {
  let component: Essence;
  let fixture: ComponentFixture<Essence>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Essence],
    }).compileComponents();

    fixture = TestBed.createComponent(Essence);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
