import { IMap } from './essence-model';

export const essenceMaps: { name: string; map: IMap }[] = [
  {
    name: 'The Hub',
    map: {
      primaries: ['agi', 'str', 'int', 'will', 'main'],
      secondaries: [
        'attack boost',
        'heat dmg boost',
        'electric dmg boost',
        'cryo dmg boost',
        'nature dmg boost',
        'arts intensity boost',
        'ultimate gain boost',
        'arts dmg boost',
      ],
      skills: ['assault', 'suppression', 'pursuit', 'crusher', 'combative', 'detonate', 'flow', 'efficacy'],
    },
  },
  {
    name: 'Originium Science Park',
    map: {
      primaries: ['agi', 'str', 'int', 'will', 'main'],
      secondaries: [
        'attack boost',
        'physical dmg boost',
        'electric dmg boost',
        'cryo dmg boost',
        'nature dmg boost',
        'critical rate boost',
        'ultimate gain boost',
        'arts dmg boost',
      ],
      skills: ['suppression', 'pursuit', 'inspiring', 'combative', 'infliction', 'medicant', 'fracture', 'efficacy'],
    },
  },
  {
    name: 'Origin Lodespring',
    map: {
      primaries: ['agi', 'str', 'int', 'will', 'main'],
      secondaries: [
        'hp boost',
        'physical dmg boost',
        'heat dmg boost',
        'cryo dmg boost',
        'nature dmg boost',
        'critical rate boost',
        'arts intensity boost',
        'treatment efficiency boost',
      ],
      skills: ['assault', 'suppression', 'combative', 'brutality', 'infliction', 'detonate', 'twilight', 'efficacy'],
    },
  },
  {
    name: 'Power Plateau',
    map: {
      primaries: ['agi', 'str', 'int', 'will', 'main'],
      secondaries: [
        'attack boost',
        'hp boost',
        'physical dmg boost',
        'heat dmg boost',
        'nature dmg boost',
        'critical rate boost',
        'arts intensity boost',
        'treatment efficiency boost',
      ],
      skills: ['pursuit', 'crusher', 'inspiring', 'brutality', 'infliction', 'medicant', 'fracture', 'flow'],
    },
  },
  {
    name: 'Wuling City',
    map: {
      primaries: ['agi', 'str', 'int', 'will', 'main'],
      secondaries: [
        'attack boost',
        'critical rate boost',
        'hp boost',
        'electric dmg boost',
        'cryo dmg boost',
        'ultimate gain boost',
        'arts dmg boost',
        'treatment efficiency boost',
      ],
      skills: ['assault', 'crusher', 'brutality', 'medicant', 'fracture', 'detonate', 'twilight', 'flow'],
    },
  },
  {
    name: 'Qingbo Stockade',
    map: {
      primaries: ['agi', 'str', 'int', 'will', 'main'],
      secondaries: [
        'hp boost',
        'physical dmg boost',
        'electric dmg boost',
        'cryo dmg boost',
        'arts intensity boost',
        'ultimate gain boost',
        'arts dmg boost',
        'treatment efficiency boost',
      ],
      skills: ['suppression', 'crusher', 'inspiring', 'combative', 'medicant', 'fracture', 'detonate', 'twilight'],
    },
  },
  {
    name: 'Marker Stone',
    map: {
      primaries: ['agi', 'str', 'int', 'will', 'main'],
      secondaries: [
        'attack boost',
        'physical dmg boost',
        'heat dmg boost',
        'electric dmg boost',
        'nature dmg boost',
        'critical rate boost',
        'ultimate gain boost',
        'arts dmg boost',
      ],
      skills: ['assault', 'pursuit', 'inspiring', 'brutality', 'infliction', 'twilight', 'flow', 'efficacy'],
    },
  },
];
