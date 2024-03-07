"use client";

import { TECH_STACK } from "@/config/stack";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [tick, setTick] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx create-next-app -e https://github.com/CreoWis/next-js-launchpad");
    setTick(true);
    setTimeout(() => {
      setTick(false);
    }, 1000);
  };

  const currentYear = new Date().getFullYear();
  
  return (
    
      <main style={{ fontFamily: 'Fira Code, monospace' }} className="overflow-hidden text-black h-screen w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-100 to-teal-100">        
       
      <div className="lg:w-10/12 xl:w-9/12 mx-auto h-full flex flex-col items-center justify-between"> 
        <div className="h-full flex flex-col justify-around">
          
             <div className="mt-10">
              {/* title data */}
               <section className="flex flex-col items-center">
                   <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold tracking-widest mb-1 text-teal-900">NextJs Launchpad</h1>
                      <p className="font-serif md:text-xl tracking-wide lg:tracking-widest text-gray-800 text-center">The comprehensive toolkit for developing Next.js projects</p>
               </section>
              
              {/* purpose */}
               <section className="mx-auto mt-6 w-[500px] min-w-full flex flex-col items-center text-center">
                   <h1 className="text-sm lg:text-base font-bold">With <span className="text-teal-900">NextJs Launchpad</span>, <span className="block">you get:</span></h1>
                      <div className="tracking-wide my-3 font-serif text-gray-700 text-xs lg:text-sm space-y-2">
                         <p>Configurations to streamline your development workflow.</p>
                         <p>A robust foundation equipped with essential tools.</p>
                      </div>
                   <h1 className="text-sm lg:text-base font-bold tracking-tighter">Elevate your Next.js projects with <span className="text-teal-900 block mt-1">NextJs Launchpad.</span></h1>
               </section>
            </div>
            
              <div className="flex items-center justify-center">
               <div className="hidden lg:block w-60 h-0.5 bg-teal-950"></div>
              </div>

              {/* how to get started */}
               <section className="mx-auto flex flex-col items-center text-black">
                <div className="flex items-center">
                    <p className="text-white bg-teal-900 px-2 py-1 rounded-md text-xs lg:text-sm font-semibold mr-1.5">
                         npx create-next-app -e https://github.com/CreoWis/next-js-launchpad
                    </p>
                     <button className="cursor-pointer hover:scale-105" onClick={handleCopy}><Image src="./assets/copy.svg" width={18} height={18} alt="copy"/></button>
                      {tick && <Image src="./assets/tick.svg" alt="tick" width={16} height={16}/>}            
              </div>
                     <p className="border-x-2 border-teal-950 w-60 lg:w-72 text-sm lg:text-base text-center tracking-widest mt-3">Edit <span className="font-bold text-teal-950 tracking-tight cursor-pointer">app/page.tsx</span> to begin </p>
               </section>
              </div>
            
               {/* tech involved  */}
                 <section className="w-full text-center rounded-xl py-4 px-5 border-t-2 border-teal-900">
                   <h1 className="lg:hidden font-semibold inline-block text-teal-950 border-b border-teal-950 tracking-widest mb-5">Tech Stack</h1>
                    <div className="grid grid-cols-4 gap-x-10 gap-y-10 cursor-pointer">
                     {TECH_STACK.map((item, index) => (
                       <Link key={index} href={item.link} target="_blank">
                        <div className=" h-20 lg:h-36 flex flex-col items-center justify-evenly border border-zinc-200 rounded-md shadow-lg shadow-black">
                           <Image src={item.image} alt={item.title} width={24} height={24} style={item.style} className="hover:scale-110"/>
                           <h1 className="text-xs sm:text-sm lg:text-base 2xl:text-lg leading-tight lg:leading-tight text-teal-950 font-semibold tracking-wider inline-block border-b border-gray-400">{item.title}</h1>
                           <p className="font-extralight text-sm font-serif text-black leading-5 hidden lg:block px-2">{item.description}</p>
                         </div>
                       </Link>
                      ))}
               </div>
              </section>
        
                {/* footer */}
                 <footer className="border-t-2 border-teal-950 shadow-xl shadow-black rounded-lg w-full h-20 flex flex-col items-center justify-around xl:flex-row py-1 space-y-1 mt-1 text-teal-950 cursor-pointer font-semibold">
                 {/* social links */}
                  <div className=" order-1 xl:order-2 w-60 lg:w-96 flex items-center justify-evenly">
                    <Link href="https://twitter.com/creowistech" target="_blank">
                     <Image src="/assets/twitter.svg" alt="twitter" width={22} height={22} className="hover:scale-110"></Image>   
                    </Link>
                    <Link href="https://www.facebook.com/creowis" target="_blank">
                      <Image src="/assets/facebook.svg" alt="facebook" width={18} height={18} className="hover:scale-110"></Image>   
                    </Link>
                    <Link href="https://www.linkedin.com/company/creowis/about//" target="_blank">
                     <Image src="/assets/linkedin.svg" alt="linkedin" width={22} height={22} className="hover:scale-110"></Image>   
                    </Link>
                    <Link href="https://github.com/CreoWis/next-js-launchpad?tab=readme-ov-file" target="_blank">
                     <Image src="/assets/github.svg" alt="github" width={20} height={20} className="hover:scale-110"></Image>
                    </Link>
                     </div>
                   <div className="order-2 xl:order-1">
                      <Link href="https://www.creowis.com/" target="_blank" className="flex items-center">
                       <Image src="/assets/creowis.jpg" alt="CreoWis" width={22} height={20} className="rounded-full"></Image>
                       <h2 className="flex ml-3 text-xs md:text-sm xl:text-base xl:tracking-wide">An Open Source initiative from CreoWis Technologies <Image src="/assets/copyright.svg" alt="copyright" width={10} height={10} className="mx-2"/> {currentYear} </h2>
                       </Link>
                   </div>
                  </footer>
                 
                </div>
               </main>
  
  );
}

