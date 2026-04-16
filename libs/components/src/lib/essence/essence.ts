import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IPrimary, ISecondary } from './essence-model';
import { essenceMaps } from './maps';
import { weapons } from './weapons';

@Component({
  selector: 'ef-essence',
  imports: [FormsModule],
  templateUrl: './essence.html',
  styleUrl: './essence.css',
})
export class Essence {
  private router = inject(Router);

  maps = signal(essenceMaps);
  weapons = signal(weapons);
  primaries = signal<IPrimary[]>(['agi', 'str', 'int', 'will', 'main']);
  secondaries = signal<ISecondary[]>([
    'attack boost',
    'hp boost',
    'physical dmg boost',
    'heat dmg boost',
    'electric dmg boost',
    'cryo dmg boost',
    'nature dmg boost',
    'critical rate boost',
    'arts intensity boost',
    'ultimate gain boost',
    'arts dmg boost',
    'treatment efficiency boost',
  ]);
  hideFives = signal(false);
  selectedPrimaries = signal<IPrimary[]>([]);
  selectedSecondary = signal<ISecondary | null>(null);
  setSecondary = (secondary: ISecondary) => {
    this.selectedSecondary.set(secondary);
  };
  clearSecondary = () => {
    this.selectedSecondary.set(null);
  };
  atLimit = computed(() => this.selectedPrimaries().length >= 3);

  weaponMap = computed(() => {
    const maps = this.maps();
    const weapons = this.weapons();
    const selectedSecondary = this.selectedSecondary();
    return maps.map((map) => {
      const mapWeapons = weapons
        .filter((weapon) => map.map.secondaries.includes(weapon.secondary))
        .filter((weapon) => map.map.skills.includes(weapon.skill))
        .filter((weapon) => !selectedSecondary || weapon.secondary === selectedSecondary)
        .filter((weapon) => !this.hideFives() || weapon.star !== 5);

      return {
        ...map,
        weapons: mapWeapons,
      };
    });
  });

  fiveStarEffect = effect(() => {
    const hideFives = this.hideFives();
    console.log(hideFives ? 'Hiding 5 star weapons' : 'Showing 5 star weapons');
  });

  /**
   * Toggles the selection of a primary
   * @param primary
   */
  togglePrimary(primary: IPrimary) {
    const selected = this.selectedPrimaries();
    if (!selected.includes(primary)) {
      this.selectedPrimaries.set([...selected, primary]);
    } else {
      this.selectedPrimaries.set(selected.filter((p) => p !== primary));
    }
  }

  /**
   * Checks if a primary is selected
   * @param primary
   * @returns boolean
   */
  selected(primary: IPrimary) {
    return this.selectedPrimaries().includes(primary);
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }

  add(name: string) {
    const count = localStorage.getItem(name);
    localStorage.setItem(name, count ? (Number.parseInt(count) + 1).toString() : '1');
  }

  subtract(name: string) {
    const count = localStorage.getItem(name);
    if (count && Number.parseInt(count) > 0) {
      localStorage.setItem(name, (Number.parseInt(count) - 1).toString());
    }
  }

  storageCount(name: string) {
    return Number.parseInt(localStorage.getItem(name) ?? '0');
  }
}
