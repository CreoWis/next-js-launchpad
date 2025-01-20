import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const NotFound = () => {
  const t = useTranslations('NotFound');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="mb-4 text-6xl font-bold">{t('404')} </h1>
      <p className="mb-4 text-xl"> {t(`dosen't_exist_text`)} </p>
      <Link
        href="/"
        className="mt-4 rounded-lg bg-blue-700 px-6 py-3 text-white transition duration-300 hover:bg-blue-800"
      >
        {t('go_to_home')}
      </Link>
    </div>
  );
};

export default NotFound;
