import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  showMenu = signal(false);
  showEssence = signal(false);
}
