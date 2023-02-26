import React from "react";
import "./Techstacks.css";
import { FaPython,FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {
  
  SiHtml5,
  SiCplusplus,
  SiExpress,
  SiRedis,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiNetlify
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
import { SiJavascript, SiHeroku } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsWordpress } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <SiNextdotjs />
            <h5>Next JS</h5>
          </div>
          <div>
            <GrGraphQl />
            <h5>Graph QL</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          <div>
            <SiMysql />
            <h5>MySQL</h5>
          </div>

          <div>
            <SiTailwindcss />
            <h5>Tailwind CSS</h5>
          </div>
          <div>
            <SiCplusplus />
            <h5>C++</h5>
          </div>
          <div>
            <FaPython />
            <h5>Python</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
        </div>
      </div>
    </>
  );
};
