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
  Navbar,
  News,
} from '@/components/features/Home';

export default function Home() {
  return (
    <>
      <Navbar />
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
