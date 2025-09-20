import { About, AboutHero, Experience, Haswabanner, ImpactNumbers, OurVision, Team } from '@/components/features/About';
import React from 'react'

export default function about() {
  return (
    <>
    <AboutHero/>
    <About/>
    <Experience/>
    <OurVision/>
    <ImpactNumbers/>
    <Haswabanner/>
    <Team/>
    </>
  )
}
