import Link from 'next/link';
import { useTranslations } from 'next-intl';

import CopyButton from '@/components/copy-button';
import Footer from '@/components/footer';

type TechStackItem = {
  name: string;
  description: string;
};

type TechStack = {
  [key: string]: TechStackItem;
};

export default function Home() {
  const t = useTranslations('Home');
  const techStack = t.raw('tech_stack') as TechStack;
  
  const links = [
    'https://nextjs.org/',
    'https://www.typescriptlang.org/',
    'https://tailwindcss.com/',
    'https://eslint.org/',
    'https://prettier.io/',
    'https://github.com/tailwindlabs/prettier-plugin-tailwindcss',
    'https://github.com/IanVS/prettier-plugin-sort-imports',
    'https://typicode.github.io/husky/'
  ];

  return (
    <>
      <section className="min-h-[94vh] w-full py-12 lg:py-14 xl:py-24 2xl:py-28">
        <div className="container mx-auto space-y-8 px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                {t('title')}
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                {t('description')}
              </p>
            </div>
            <div className="flex items-center py-6">
              <CopyButton />
            </div>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-lg">
              {t('edit_prompt')}
              <span className="font-bold"> {t('edit_file')}</span>{' '}
              {t('edit_to_start')}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(techStack).map(([key, item], index) => (
              <Link key={key} href={links[index]} target="_blank">
                <div className="transform rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105 sm:h-[192px] md:h-[164px] lg:h-[219px] xl:h-[179px] 2xl:h-[163px]">
                  <h3 className="mb-2 text-xl font-bold">{item.name}</h3>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}