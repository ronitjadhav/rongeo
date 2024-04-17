import React from "react";
import Navbar from "@/app/(home)/components/Navbar";
import HeroSection from "@/app/(home)/components/HeroSection";
import { HeroHighlight } from "@/app/(home)/components/ui/hero-highlight";

export default function Page() {
    return (
        <div className='min-h-screen bg-black overflow-hidden'>
            <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2]">
                <div className="max-w-7xl mx-auto p-5 ">
                    <Navbar/>
                    <HeroSection/>
                </div>
            </div>

        </div>
    );
}
