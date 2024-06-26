import React from "react";
import Navbar from "@/app/(home)/components/Navbar";
import HeroSection from "@/app/(home)/components/HeroSection";
import { HeroHighlight } from "@/app/(home)/components/ui/hero-highlight";
import NavBarNextUI from "@/app/(home)/components/NavBarNextUI";
import berlinImage from "@/app/(home)/media/berlin.png";
import Contact from "@/app/(home)/components/contact/contacts";

export default function Page() {
    return (
        <div className='min-h-screen bg-black overflow-hidden'>
            <div className="dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
                {/* Container with gradient background */}
                <div className="relative">
                    {/* Image overlay with gradient */}
                    <div
                        className="absolute top-0 left-0 w-full h-full"
                        style={{
                            backgroundImage: `url(${berlinImage.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: 0.4,
                        }}
                    />
                    {/* Content */}
                    <div className="max-w-7xl mx-auto p-5 relative z-10">
                        <NavBarNextUI />
                        <HeroSection />

                    </div>
                    {/* Gradient bar at the bottom */}
                    <div
                        className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"
                    />
                </div>
            </div>
            <Contact />
        </div>
    );
}
