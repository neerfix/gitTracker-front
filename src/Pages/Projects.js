import React from "react";
import Logo from "../assets/img/logo.png";
import ProjectList from "../Components/Projects/projectList";

export const Projects = () => (
  <>
    <div className={'container d-flex justify-content-center'}>
      <img src={Logo} alt="" height={100}/>
    </div>
      <ProjectList />
  </>
);
