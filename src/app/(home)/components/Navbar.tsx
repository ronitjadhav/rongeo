import React from "react";
import {SiGithub, SiLinkedin, SiX} from "react-icons/si";

export default function Navbar() {
    const socials = [
        {
            Link: "https://github.com/ronitjadhav",
            Label: "GitHub",
            Icon: SiGithub,
        },
        {
            Link: "https://www.linkedin.com/in/ronitjadhav/",
            Label: "LinkedIn",
            Icon: SiLinkedin,
        },
        {
            Link: "https://twitter.com/ronit_jadhav",
            Label: "Twitter",
            Icon: SiX,
        },
    ];

    return (
        <nav className="py-10 flex justify-between items-center">
            <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
                RonGeo 🗺️
            </h1>
            <div className="flex items-center gap-5">
                {socials.map((social, index) => {
                    const { Link, Label, Icon } = social;
                    return (
                        <a
                            key={index}
                            href={Link}
                            aria-label={Label}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon className="w-5 h-5 hover:scale-125 transition-all"/>
                        </a>
                    );
                })}
            </div>
        </nav>
    );
}
