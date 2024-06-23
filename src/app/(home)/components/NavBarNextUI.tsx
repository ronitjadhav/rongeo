import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import React from "react";
import { AcmeLogo } from "../media/logo.jsx";

export default function NavBarNextUI() {
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
        <Navbar shouldHideOnScroll>
            <NavbarBrand>
                <p className="font-bold text-inherit">Ronit Jadhav</p>
            </NavbarBrand>
            <NavbarContent justify="end">
                {socials.map((social, index) => (
                    <NavbarItem key={index}>
                        <a
                            href={social.Link}
                            aria-label={social.Label}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <social.Icon className="w-5 h-5 mr-2 hover:scale-125 transition-all"/>
                        </a>
                    </NavbarItem>
                ))}
                <NavbarItem className="hidden lg:flex">
                    {/* Add content here */}
                </NavbarItem>
                <NavbarItem>
                    {/* Add content here */}
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
