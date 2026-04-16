import { Component } from '@angular/core';
import { Menu } from '../menu/menu';
import { MenuSwitch } from '../menu/menu-switch';

@Component({
  selector: 'ef-ui',
  imports: [Menu, MenuSwitch],
  templateUrl: './ui.html',
  styleUrl: './ui.css',
})
export class Ui {}
