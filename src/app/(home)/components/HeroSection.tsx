import React from 'react';
import Link from "next/link";

export default function HeroSection() {
    return (
        <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg-gap-0 lg:flex-row items-center justify-between">
            <div className=" space-y-10 text-center lg:text-left">
                <h1 className="text-4xl lg:text-7xl font-bold">
                    Nice to meet you! 👋
                    <br /> <span className="underline underline-offset-8 decoration-green-500">{"I'm Ronit Jadhav."}</span>
                </h1>
                <p className="md:w-96 text-lg text-gray-300">
                    {
                        "Based in Germany, I'm a Geospatial Developer and a Software Engineer. I love to work with maps, data, and code. I'm passionate about open-source, web technologies, and building cool stuff."
                    }
                </p>
                <Link href={"mailto:ronitt@pm.me"} className="inline-block group">
                    <div>
                        <h1 className="text-3xl font-bold group-hover:text-green-400 translate-all">
                            Contact me 📬
                        </h1>
                        <div className="w-40 h-2 bg-green-500 rounded-full "></div>
                        <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
                    </div>
                </Link>
            </div>
            <div>
            <div className="w-72 h-72 space-y-3 -rotate-[30deg]">
                    <div className="flex gap-3 translate-x-8">
                        <div className=" w-32 h-32 rounded-2xl bg-green-500"></div>
                        <div className=" w-32 h-32 rounded-full bg-indigo-500"></div>
                    </div>
                    <div className="flex gap-3 -translate-x-8">
                        <div className=" w-32 h-32 rounded-2xl bg-indigo-500"></div>
                        <div className=" w-32 h-32 rounded-full bg-green-500"></div>
                    </div>
                    <div className=" glow absolute top-[40%] right-1/2 -z-10"></div>
                </div>
            </div>
        </div>
    );
}
