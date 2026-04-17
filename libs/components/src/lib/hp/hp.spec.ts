import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hp } from './hp';

describe('Hp', () => {
  let component: Hp;
  let fixture: ComponentFixture<Hp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hp],
    }).compileComponents();

    fixture = TestBed.createComponent(Hp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
