import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Map } from '../map/map';
import { MenuService } from './menu.service';

@Component({
  selector: 'ef-menu',
  imports: [Map],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  private menuService = inject(MenuService);
  private router = inject(Router);
  showMenu = this.menuService.showMenu;
  showEssence = this.menuService.showEssence;

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
