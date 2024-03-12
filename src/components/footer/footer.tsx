import Link from 'next/link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="items-center justify-evenly bg-gray-300 py-4 text-center text-black lg:flex">
      <Link href="https://www.creowis.com/" target="_blank">
        &copy; {currentYear} An Open Source initiative from CreoWis
        Technologies.
      </Link>
      <div className="mt-4 flex justify-center gap-4 lg:mt-0 lg:gap-8">
        {SOCIAL_LINKS.map((item, id) => (
          <Link key={id} href={item.link} target="_blank">
            <div className=" hover:scale-105">{item.icon}</div>
          </Link>
        ))}
      </div>
    </footer>
  );
};

const ICONS = {
  facebook: (
    <svg
      className="h-5 w-5"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="#1877f2" height="512" rx="15%" width="512" />
      <path
        d="m355.6 330 11.4-74h-71v-48c0-20.2 9.9-40 41.7-40h32.3v-63s-29.3-5-57.3-5c-58.5 0-96.7 35.4-96.7 99.6v56.4h-65v74h65v182h80v-182z"
        fill="#fff"
      />
    </svg>
  ),

  linkedin: (
    <svg
      className="h-5 w-5"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m116 3h-104a8.91 8.91 0 0 0 -9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81v-104.42a8.93 8.93 0 0 0 -9-8.77z"
        fill="#0076b2"
      />
      <g fill="#fff">
        <path d="m21.06 48.73h18.11v58.27h-18.11zm9.06-29a10.5 10.5 0 1 1 -10.5 10.49 10.5 10.5 0 0 1 10.5-10.49" />
        <path d="m50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41 18.34-.04 21.74 12.03 21.74 27.68v32h-18.11v-28.35c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15v28.79h-18.08z" />
      </g>
    </svg>
  ),

  twitter: (
    <svg
      className="h-5 w-5"
      viewBox="0 0 126.24 102.59"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m40.58 115.3c47.64 0 73.69-39.47 73.69-73.69 0-1.12 0-2.24-.07-3.35a52.7 52.7 0 0 0 12.92-13.41 51.7 51.7 0 0 1 -14.87 4.08 26 26 0 0 0 11.38-14.33 51.9 51.9 0 0 1 -16.45 6.29 25.92 25.92 0 0 0 -44.13 23.62 73.53 73.53 0 0 1 -53.38-27.06 25.92 25.92 0 0 0 8 34.58 25.71 25.71 0 0 1 -11.67-3.25v.33a25.91 25.91 0 0 0 20.73 25.39 25.86 25.86 0 0 1 -11.7.44 25.93 25.93 0 0 0 24.2 18 52 52 0 0 1 -32.17 11.06 52.72 52.72 0 0 1 -6.18-.36 73.32 73.32 0 0 0 39.7 11.63"
        fill="#1da1f2"
        transform="translate(-.88 -12.7)"
      />
    </svg>
  ),

  github: (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m0 0h24v24h-24z"
        fill="#fff"
        opacity="0"
        transform="matrix(-1 0 0 -1 24 24)"
      />
      <path
        d="m12 1a10.89 10.89 0 0 0 -11 10.77 10.79 10.79 0 0 0 7.52 10.23c.55.1.75-.23.75-.52s0-.93 0-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0 -1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84 4.15 4.15 0 0 1 1.17 2.89c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95s.2.63.75.52a10.8 10.8 0 0 0 7.5-10.22 10.89 10.89 0 0 0 -11-10.77"
        fill="#231f20"
      />
    </svg>
  ),
};

const SOCIAL_LINKS = [
  {
    id: 1,
    name: 'Facebook',
    link: 'https://www.facebook.com/creowis',
    icon: ICONS.facebook,
  },

  {
    id: 2,
    name: 'Twitter',
    link: 'https://twitter.com/creowistech',
    icon: ICONS.twitter,
  },

  {
    id: 3,
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/company/creowis/about/',
    icon: ICONS.linkedin,
  },

  {
    id: 4,
    name: 'Github',
    link: 'https://github.com/CreoWis/next-js-launchpad',
    icon: ICONS.github,
  },
];

