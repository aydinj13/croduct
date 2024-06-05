"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import Navbar from "./Navbar";


export default function Projects() {
  return (
    <>
    <Navbar />
    <div id="projects" className="mt-28 mb-28">
      <SectionHeading>Croduct Portfolio</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </div>
    </>
  );
}