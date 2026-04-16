import { Component, inject } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
  selector: 'ef-menu-switch',
  imports: [],
  templateUrl: './menu-switch.html',
  styleUrl: './menu-switch.css',
})
export class MenuSwitch {
  private menuService = inject(MenuService);
  showMenu = this.menuService.showMenu;
}
