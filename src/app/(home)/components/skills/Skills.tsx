"use client";

import React from "react"
import {
    SiAngular,
    SiArcgis, SiDocker,
    SiGit,
    SiGraphql,
    SiHtml5,
    SiJavascript,
    SiJest, SiLeaflet,
    SiNextdotjs,
    SiNodedotjs, SiOpenlayers, SiPostgresql, SiPython, SiQgis, SiTypescript,
} from "react-icons/si"
import Title from "../ui/Title"
import { HoverEffect } from "../ui/card-hover-effect"

export default function Skills() {

    const skills = [
        {
            text:"ArcGIS",
            Icon: SiArcgis
        },
        {
            text:"QGIS",
            Icon: SiQgis
        },
        {
            text: "OpenLayers",
            Icon: SiOpenlayers
        },
        {
            text: "Leaflet",
            Icon: SiLeaflet
        },
        {
            text:"Python",
            Icon: SiPython
        },
        {
            text:"Javascript",
            Icon: SiJavascript
        },
        {
            text:"HTML",
            Icon: SiHtml5
        },
        {
            text: "Typescript",
            Icon: SiTypescript
        },
        {
            text:"Angular",
            Icon: SiAngular
        },
        {
            text: "PostGIS",
            Icon: SiPostgresql
        },
        {
            text:"Version Control",
            Icon: SiGit
        },
        {
            text: "Docker",
            Icon: SiDocker
        }


    ]
    return (
        <div className="max-w-5xl mt-15 mx-auto px-8">
            <Title text="Skills🔪" className="flex flex-col items-center justify-center -rotate-6"/>
            <HoverEffect items={skills}/>
        </div>


    )
};
