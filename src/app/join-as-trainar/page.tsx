import { Team } from '@/components/features/About';
import {
  Bannerjoin,
  FlexibleTraining,
  HawsaTot,
  Hero,
} from '@/components/features/Join-as-trainer';

export default function page() {
  return (
    <div>
      <Hero />

      <HawsaTot />
      <FlexibleTraining />
      <Bannerjoin />
      <Team />
    </div>
  );
}
