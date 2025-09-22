import Banner from '@/components/shared/banner';

export default function Bannerjoin() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16'>
      <Banner
        title='Manage everything in one place your profile, videos, and certificates are all digital and just one click away..'
        subtitle='Your Digital Trainer Hub – Manage Your Profile, Videos, and Certificates All in One Click Ready to inspire? Join Hawssa today and take your trainer journey to the next level'
        buttonText='Register as a Trainer'
        buttonText2='Have an Account?'
        image='/assets/banner.png'
      />
    </div>
  );
}
