import React from "react";
import Navbar from "@/app/(home)/components/Navbar";
import HeroSection from "@/app/(home)/components/HeroSection";
import { HeroHighlight } from "@/app/(home)/components/ui/hero-highlight";

export default function Page() {
    return (
        <div className='min-h-screen bg-black overflow-hidden'>
            <HeroHighlight>
                <div className="max-w-7xl mx-auto p-5 ">
                    <Navbar/>
                    <HeroSection/>
                </div>
            </HeroHighlight>
        </div>
    );
}
