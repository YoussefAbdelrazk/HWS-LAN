'use client';

import { Button } from '@/components/ui/button';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Globe } from 'lucide-react';
import { useLocale } from 'next-intl';

const locales = [
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'ar', name: 'العربية', dir: 'rtl' },
];

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale = locales.find(l => l.code !== locale) || locales[1];

  const switchLocale = () => {
    router.replace(pathname, { locale: nextLocale.code });
    router.refresh();
  };

  return (
    <Button
      variant='ghost'
      size='sm'
      onClick={switchLocale}
      className='h-10 px-4 text-white hover:bg-[#F7F225] hover:text-black border border-white/20 hover:border-white/30 transition-all duration-200 backdrop-blur-sm rounded-lg'
    >
      <div className='flex items-center gap-2'>
        <Globe className='h-4 w-4' />
        <span className='text-sm font-medium'>{nextLocale.name}</span>
      </div>
    </Button>
  );
}
