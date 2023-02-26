import React from "react";
import "./Projects.css";
import sharme from '../../assets/shareme.png'
import pizza from '../../assets/pizza.png'
import saic from '../../assets/saic.png'
import ode from '../../assets/ode.png'
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiVercel,
  SiMaterialui,
  SiChai,SiNextdotjs,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3,DiDjango } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={sharme}
                    alt="Shareme Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Pinterest Clone - ShareMe</h2>
                <p>
                  Sharme is a photo sharing app just like a pinterest clone. Here you can post pictures,
                  ,save, download and even comment on other photos. 
                </p>
                <div>
                  <SiNodedotjs />
                  <SiTailwindcss />
                  <FaReact />
                  
                </div>
                <div>
                  <a
                    href="https://shareme-clone-ism.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/ishaanms/shareme_clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={ode}
                    alt="React and Graphs"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>React and Graphs</h2>
                <p>
                Osscilatory and non-linear differential equation simulator built using ChartJS and ReactJS.
                </p>
                <div>
                  <DiCss3 />
                  <FaReact />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://nonlineardiffeqnsim.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/ishaanms/non_linear_differential_equation_sim"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={pizza} alt="Pizza ordering app" />
                </div>
              </div>
              <div className="project_information">
                <h2>Pizzeria</h2>
                <p>
                Food ordering app built using NextJS, MongoDB and hosted on Vercel.
                </p>
                <div>
                  <SiNextdotjs />
                  <SiMongodb />
                  <SiVercel/>
                </div>
                <div>
                  <a
                    href="https://restraunt-app.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/ishaanms/restraunt_app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={saic}
                    alt="SAIC"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>SAIC -College Alumni Website</h2>
                <p>
                IIT-BHU Alumni website built using Django and ReactJS.
                </p>
                <div>
                  <FaReact />
                  <DiDjango/>
                </div>
                <div>
                  <a
                    href="https://saic.iitbhu.ac.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
