import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";


import "./Header.css";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + themename}>
        <h3>
          <a href="#home" className="link">
            <span style={{fontFamily:'Great Vibes', fontSize:'50px'}}>
              
              Ishaan
            </span>
            
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};
