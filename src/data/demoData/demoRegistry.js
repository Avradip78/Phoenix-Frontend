import { financeDemo } from './financeDemo';
import { salesDemo } from './salesDemo';
import { hrDemo } from './hrDemo';
import { marketingDemo } from './marketingDemo';
import { supportDemo } from './supportDemo';
import { operationsDemo } from './operationsDemo';
import { decisionDemo } from './decisionDemo';
import {
  CreditCard,
  TrendingUp,
  Users,
  Megaphone,
  Headphones,
  Sliders,
  BrainCircuit
} from 'lucide-react';

export const ALL_DEMOS = [
  { ...financeDemo, icon: CreditCard },
  { ...salesDemo, icon: TrendingUp },
  { ...hrDemo, icon: Users },
  { ...marketingDemo, icon: Megaphone },
  { ...supportDemo, icon: Headphones },
  { ...operationsDemo, icon: Sliders },
  { ...decisionDemo, icon: BrainCircuit }
];

export const DEMO_MAP = {
  finance: { ...financeDemo, icon: CreditCard },
  sales: { ...salesDemo, icon: TrendingUp },
  hr: { ...hrDemo, icon: Users },
  marketing: { ...marketingDemo, icon: Megaphone },
  support: { ...supportDemo, icon: Headphones },
  operations: { ...operationsDemo, icon: Sliders },
  decision: { ...decisionDemo, icon: BrainCircuit }
};

export function getDemoById(id) {
  return DEMO_MAP[id] || DEMO_MAP.finance;
}
