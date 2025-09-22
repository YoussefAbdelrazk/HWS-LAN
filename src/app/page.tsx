import {
  About,
  Banner,
  BannerPlatform,
  CertifiedTrainer,

  Experience,
  Hero,
  ImpactNumbers,
  Haswabanner,

  News,
  Events,
} from '@/components/features/Home';

export default function Home() {
  return (
    <>

      <Hero />
      <About />
      <CertifiedTrainer />
      <Experience />
      <Banner />
      <Events title='Join The Movement :' text='Hawssaa Events' />
      <BannerPlatform />
      <ImpactNumbers />
      <Haswabanner />
      <News />
    </>
  );
}
