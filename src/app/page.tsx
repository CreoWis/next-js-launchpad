import Link from 'next/link';

import CopyButton from '@/components/copy-button';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <section className="grid-row-[11fr_1fr] grid h-screen">
      <div className="container mx-auto flex flex-col justify-center space-y-8 px-4 py-12 md:px-6 lg:py-14 xl:py-24 2xl:py-28">
        <div className="flex flex-col items-center space-y-8 text-center min-[2000px]:space-y-12">
          <div className="space-y-4 min-[2000px]:space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none min-[2000px]:text-8xl">
              NextJS Launchpad
            </h1>
            <p className="mx-auto max-w-2xl text-gray-500 md:text-xl min-[2000px]:max-w-3xl min-[2000px]:text-2xl">
              We created a boilerplate with essential tools and best practices
              so you can focus on building your NextJS project.
            </p>
          </div>
          <div className="flex items-center">
            <CopyButton />
          </div>
          <p className="text-gray-700 md:text-lg min-[2000px]:text-2xl">
            Edit <span className="font-bold">app/page.tsx</span> to start.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {TECH_STACK.map((item, id) => (
            <Link key={id} href={item.link} target="_blank">
              <div className="transform rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105 sm:h-48 md:h-40 lg:h-56 xl:h-44 2xl:h-40">
                <h3 className="mb-2 text-xl font-bold">{item.name}</h3>
                <p className="text-gray-500">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-end">
        <Footer />
      </div>
    </section>
  );
}

const TECH_STACK = [
  {
    id: 1,
    name: 'Next JS',
    description:
      'Utilize the power of Next.js for server-rendered React applications.',
    link: 'https://nextjs.org/',
  },

  {
    id: 2,
    name: 'TypeScript',
    description:
      "Enhance your development experience with TypeScript's static typing.",
    link: 'https://www.typescriptlang.org/',
  },

  {
    id: 3,
    name: 'Tailwind CSS',
    description:
      "Rapidly build custom designs with Tailwind CSS's utility-first approach.",
    link: 'https://tailwindcss.com/',
  },

  {
    id: 4,
    name: 'ESLint',
    description:
      'Enforce code quality standards and catch errors early with ESLint.',
    link: 'https://eslint.org/',
  },

  {
    id: 5,
    name: 'Prettier',
    description:
      'Keep your codebase clean and consistent with automatic code formatting using Prettier.',
    link: 'https://prettier.io/',
  },

  {
    id: 6,
    name: 'Prettier Plugin Tailwindcss',
    description:
      'Automatic sorting of tailwind classnames using the official prettier plugin.',
    link: 'https://github.com/tailwindlabs/prettier-plugin-tailwindcss',
  },

  {
    id: 7,
    name: 'Prettier Plugin Sort Imports',
    description:
      'Sort imports alphabetically for better readability, especially in larger projects.',
    link: 'https://github.com/IanVS/prettier-plugin-sort-imports',
  },

  {
    id: 8,
    name: 'Husky',
    description:
      'Ensure code quality and prevent bad commits with pre-commit hooks powered by Husky.',
    link: 'https://typicode.github.io/husky/',
  },
];
