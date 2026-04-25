import { NgOptimizedImage } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IPrimary, ISecondary, ISkill } from './essence-model';
import { essenceMaps } from './maps';
import { weapons } from './weapons';

@Component({
  selector: 'ef-essence',
  imports: [FormsModule, NgOptimizedImage],
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
  skills = signal<ISkill[]>([
    'assault',
    'suppression',
    'pursuit',
    'crusher',
    'inspiring',
    'combative',
    'brutality',
    'infliction',
    'medicant',
    'fracture',
    'detonate',
    'twilight',
    'flow',
    'efficacy',
  ]);
  hideFives = signal(false);
  selectedPrimaries = signal<IPrimary[]>([]);
  selectedSecondary = signal<ISecondary | null>(null);
  selectedSkill = signal<ISkill | null>(null);
  atLimit = computed(() => this.selectedPrimaries().length >= 3);

  weaponMap = computed(() => {
    const maps = this.maps();
    const weapons = this.weapons();
    const selectedSecondary = this.selectedSecondary();
    const selectedSkill = this.selectedSkill();
    return maps.map((map) => {
      const mapWeapons = weapons
        .filter((weapon) => map.map.secondaries.includes(weapon.secondary))
        .filter((weapon) => map.map.skills.includes(weapon.skill))
        .filter((weapon) => !selectedSecondary || weapon.secondary === selectedSecondary)
        .filter((weapon) => !selectedSkill || weapon.skill === selectedSkill)
        .filter((weapon) => !this.hideFives() || weapon.star !== 5);

      return {
        ...map,
        weapons: mapWeapons,
      };
    });
  });

  navigate(path: string) {
    this.router.navigate([path]);
  }

  add(name: string) {
    try {
      const count = localStorage.getItem(name);
      localStorage.setItem(name, count ? (Number.parseInt(count) + 1).toString() : '1');
    } catch (e) {
      this.noop(e);
    }
  }

  subtract(name: string) {
    try {
      const count = localStorage.getItem(name);
      if (count && Number.parseInt(count) > 0) {
        localStorage.setItem(name, (Number.parseInt(count) - 1).toString());
      }
    } catch (e) {
      this.noop(e);
    }
  }

  storageCount(name: string) {
    try {
      return Number.parseInt(localStorage.getItem(name) ?? '0');
    } catch (e) {
      this.noop(e);
      return 0;
    }
  }

  noop(event: unknown) {
    return event;
  }
}
