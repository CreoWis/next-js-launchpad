"use client";

import { TECH_STACK } from "@/config/stack";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  
  return (
    
      <main style={{ fontFamily: 'Fira Code, monospace' }} className="text-black overflow-hidden w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-100 to-teal-100">     
        
       <div className="lg:w-10/12 2xl:w-9/12 mx-auto">
        {/* navbar */}
         <nav className="flex items-center justify-between px-5 lg:px-10 py-1.5 text-teal-950 cursor-pointer border-b-2 rounded-md border-gray-900 font-semibold shadow-xl shadow-black">
          <div className="flex items-center">
            <Image src="/assets/creowis.jpg" alt="CreoWis" width={28} height={20}></Image>
          <Link href="https://www.creowis.com/" target="_blank">
            <h2 className="ml-3 text-sm lg:text-lg hover:scale-110">CreoWis</h2>
          </Link>
          </div>
          {/* social links */}
          <div className="flex items-center space-x-5 lg:space-x-10 2xl:space-x-14">
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
          </nav>
                  
          <div className="h-[908px] min-h-full flex flex-col items-center justify-between pb-0.5">
            
           <div className="my-auto h-[500px] flex flex-col justify-between">
            <div className="mt-10 lg:mt-20">

              {/* title data */}
               <section className="flex flex-col items-center">
                   <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold tracking-widest mb-1 text-teal-900">NextJs Launchpad</h1>
                      <p className="font-serif md:text-xl tracking-wide lg:tracking-widest text-gray-700 text-center">The comprehensive toolkit for developing Next.js projects</p>
               </section>
              
              {/* purpose */}
               <section className="mt-5 mx-auto w-[500px] min-w-full flex flex-col items-center text-center">
                   <h1 className="text-sm lg:text-base font-bold">With <span className="text-teal-900">NextJs Launchpad</span>, <span className="block">you get:</span></h1>
                      <div className="tracking-wide my-2 font-serif ">
                         <p className="text-slate-800 text-xs lg:text-sm ">Configurations to streamline your development workflow.</p>
                         <p className="text-slate-800 text-xs lg:text-sm ">A robust foundation equipped with essential tools.</p>
                      </div>
                   <h1 className="text-sm lg:text-base font-bold tracking-tighter">Elevate your Next.js projects with <span className="text-teal-900 block">NextJs Launchpad.</span></h1>
               </section>
            </div>
            
              <div className="flex items-center justify-center">
               <div className="hidden lg:block w-60 h-0.5 bg-teal-950"></div>
              </div>

              {/* how to get started */}
               <section className="mx-auto px-1 flex flex-col items-center text-black">
                <div className="flex items-center">
                    <p className="text-white bg-teal-900 px-2 py-1 rounded-md text-xs lg:text-sm font-semibold  mr-2">
                         npx create-next-app -e https://github.com/CreoWis/next-js-launchpad
                    </p>
                     <button className="mb-1 cursor-pointer hover:scale-105 mt-1" onClick={() => navigator.clipboard.writeText("npx create-next-app -e https://github.com/CreoWis/next-js-launchpad")}><Image src="./assets/copy.svg" width={18} height={18} alt="copy"/></button>
                </div>
                     <p className="border-x border-black w-64 text-sm lg:text-base text-center tracking-wide mt-3">Edit <span className="font-bold text-teal-950 tracking-tight">app/page.tsx</span> to begin </p>
               </section>
              </div>
            
               {/* tech involved  */}
                 <section className="w-full text-center rounded-xl px-5 mb-3 pt-5 border-t-2 border-teal-900">
                   <h1 className="lg:hidden font-semibold mb-5 rounded-sm inline-block text-teal-950 border-b border-teal-950 tracking-widest">Tech Stack</h1>
                    <div className="grid grid-cols-4 gap-x-10 gap-y-5 cursor-pointer">
                     {TECH_STACK.map((item, index) => (
                       <Link key={index} href={item.link} target="_blank">
                        <div  className="h-20 lg:h-36 min-h-full flex flex-col items-center justify-around border border-zinc-200 rounded-md shadow-lg shadow-black">
                           <Image src={item.image} alt={item.title} width={24} height={24} style={item.style} className="hover:scale-110"/>
                           <h1 className="text-xs sm:text-sm lg:text-base leading-tight lg:leading-tight text-teal-950 font-semibold tracking-wider inline-block border-b border-gray-400">{item.title}</h1>
                           <p className="font-extralight text-sm font-serif text-black leading-5 hidden lg:block px-2">{item.description}</p>
                         </div>
                       </Link>
                      ))}
               </div>
              </section>
            </div>
          </div>
        </main>
  
  );
}

