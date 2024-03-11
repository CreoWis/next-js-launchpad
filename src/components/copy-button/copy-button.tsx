"use client";

import { useState } from "react";

type IconProps = React.HTMLAttributes<SVGElement>;

export const CopyButton = () => {
  const [tick, setTick] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx create-next-app -e https://github.com/CreoWis/next-js-launchpad");
    setTick(true);
    setTimeout(() => {
      setTick(false);
    }, 1000);
  };

  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-2">
      <span className="px-2 text-gray-500">
        npx create-next-app -e https://github.com/CreoWis/next-js-launchpad
      </span>
      {tick ? (
        <button className="pr-1">
          <TickIcon className="h-4 w-4" />
        </button>
      ) : (
        <button className="cursor-pointer hover:scale-105 pr-1" onClick={handleCopy}>
          <CopyIcon className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

function CopyIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function TickIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}