import HeroShared from '@/components/shared/HeroShared'
import { HawsaTot, FlexibleTraining, Bannerjoin } from '@/components/features/Join-as-trainer'
import React from 'react'
import { Team } from '@/components/features/About'

export default function page() {
  return (
    <div>
      <HeroShared title='Join as a Hawssa Trainer Empower Your Journey, Inspire Millions' image='/assets/Hero.png' />

      <HawsaTot />
      <FlexibleTraining />
      <Bannerjoin />
      <Team/>

    </div>
  )
}
