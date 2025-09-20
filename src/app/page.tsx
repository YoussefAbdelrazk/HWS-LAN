import {
  About,
  Banner,
  BannerPlatform,
  CertifiedTrainer,
  Events,
  Experience,
  Hero,
  ImpactNumbers,
  Haswabanner,
  
  News,
} from '@/components/features/Home';

export default function Home() {
  return (
    <>

      <Hero />
      <About />
      <CertifiedTrainer />
      <Experience />
      <Banner />
      <Events />
      <BannerPlatform />
      <ImpactNumbers />
      <Haswabanner />
      <News />
    </>
  );
}
