"use client";

import React from 'react';
import Link from "next/link";
import myImage from "@/app/(home)/media/me.png";
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
    // function to scroll to the specific element_id
    const scrolltoHash = function (element_id: string) {
        const element = document.getElementById(element_id)
        element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }

    return (
        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-14 lg:gap-0">
            <div className="relative lg:order-2">
                <div className="relative flex-shrink-0 w-80 h-96 rounded-t-full rounded-b-full overflow-hidden">
                    <Image src={myImage} alt="Ronit Jadhav" className="w-full h-full object-cover" layout="fill"/>
                    <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-green-500 to-indigo-500 opacity-60 w-80 h-96 rounded-t-full rounded-b-full -z-10"></div>
                </div>
            </div>
            <div className="space-y-10 text-center lg:text-left lg:order-1">
                <TypeAnimation className={'text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-indigo-500'}
                               sequence={['Hello!', 1000, 'Hola!', 1000, 'Bonjour!', 1000, 'Namaste!', 1000]}
                />
                <h1 className="text-4xl lg:text-7xl font-bold">
                    Nice to meet you! 👋
                    <br/> <span className="underline underline-offset-8 decoration-green-500">{"I'm Ronit Jadhav."}</span>
                </h1>
                <p className="md:w-100 text-lg text-gray-300">
                    Based in Germany, I&apos;m a Geospatial Developer and a Software Engineer. <br/>
                    I love to work with maps, data, and code. <br/>
                    I&apos;m passionate about open-source, web technologies, and building cool stuff.
                </p>
                <Link href="#" onClick={(e) => {e.preventDefault(); scrolltoHash('contact');}} className="inline-block group">
                    <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
                        <span className="absolute inset-0 overflow-hidden rounded-full">
                            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"/>
                        </span>
                        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-6 ring-1 ring-white/10">
                            <span>Contact me 📬</span>
                            <svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                            </svg>
                        </div>
                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"/>
                    </button>
                </Link>
            </div>
        </div>
    );
}
