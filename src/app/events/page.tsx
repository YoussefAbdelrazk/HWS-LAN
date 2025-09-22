import { Hero } from '@/components/features/Events'
import { Events } from '@/components'
import React from 'react'
import { BannerPlatform, Experience } from '@/components/features/Home'
import { Team } from '@/components/features/About'

export default function events() {
  return (
    <div>
      <Hero />
      <Events title='Hawssaa Events :' text='Where Fitness Meets Fun, Family, Community' />
      <Experience />
      <BannerPlatform/>
      <Team/>
    </div>
  )
}
