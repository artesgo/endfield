export interface IEssence {
  primary: IPrimary;
  secondary: ISecondary;
  skill: ISkill;
}

export interface IMap {
  primaries: IPrimary[];
  secondaries: ISecondary[];
  skills: ISkill[];
}

export type IPrimary = 'main' | 'int' | 'agi' | 'str' | 'will';

export type ISecondary =
  | 'attack boost'
  | 'hp boost'
  | 'physical dmg boost'
  | 'heat dmg boost'
  | 'electric dmg boost'
  | 'cryo dmg boost'
  | 'nature dmg boost'
  | 'critical rate boost'
  | 'arts intensity boost'
  | 'ultimate gain boost'
  | 'arts dmg boost'
  | 'treatment efficiency boost';

export type ISkill =
  | 'assault'
  | 'suppression'
  | 'pursuit'
  | 'crusher'
  | 'inspiring'
  | 'combative'
  | 'brutality'
  | 'infliction'
  | 'medicant'
  | 'fracture'
  | 'detonate'
  | 'twilight'
  | 'flow'
  | 'efficacy';
