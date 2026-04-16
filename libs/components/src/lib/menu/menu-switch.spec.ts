import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuSwitch } from './menu-switch';

describe('MenuSwitch', () => {
  let component: MenuSwitch;
  let fixture: ComponentFixture<MenuSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSwitch],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuSwitch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
