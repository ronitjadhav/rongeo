"use client";

import React from 'react';
import Link from "next/link";
import myImage from "@/app/(home)/media/me.png";
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
    // let's make a function that receive the specific element_id as string and scroll into that element_id
    const scrolltoHash = function (element_id: string) {
        const element = document.getElementById(element_id)
        element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }

    return (
        <div className="min-h-screen flex flex-col-reverse gap-14 lg-gap-0 lg:flex-row items-center justify-between">
            <div className="space-y-10 text-center lg:text-left">
                <TypeAnimation className={'text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-indigo-500'}
                    sequence={['Hello!', 1000, 'Hola!', 1000, 'Bonjour!', 1000, 'Namaste!', 1000]}
                />
                <h1 className="text-4xl lg:text-7xl font-bold">
                    Nice to meet you! 👋
                    <br/> <span
                    className="underline underline-offset-8 decoration-green-500">{"I'm Ronit Jadhav."}</span>
                </h1>
                <p className="md:w-100 text-lg text-gray-300">
                    Based in Germany, I&apos;m a Geospatial Developer and a Software Engineer. <br/>
                    I love to work with maps, data, and code. <br/>
                    I&apos;m passionate about open-source, web technologies, and building cool stuff.
                </p>
                <Link href="#" onClick={(e) => {e.preventDefault(); scrolltoHash('contact');}} className="inline-block group">
                    <div>
                        <h1 className="text-3xl font-bold group-hover:text-green-400 translate-all">
                            Contact me 📬
                        </h1>
                        <div className="w-40 h-2 bg-green-500 rounded-full "></div>
                        <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
                    </div>
                </Link>
            </div>
            <div className="relative flex-shrink-0 w-80 h-96 rounded-t-full rounded-b-full overflow-hidden">
                <Image src={myImage} alt="Ronit Jadhav" className="w-full h-full object-cover" layout="fill"/>
                <div
                    className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-green-500 to-indigo-500 opacity-60 w-80 h-96 rounded-t-full rounded-b-full -z-10"></div>
            </div>
        </div>
    );
}
