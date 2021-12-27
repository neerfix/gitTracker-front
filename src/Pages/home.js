import React from "react";
import Logo from "../assets/img/logo.png";
// import ProjectList from "../Components/Projects/projectList";
// import projects from '../Data/Project.json';
import Landing from "./Landing"

export const Home = () => (
  <>
    <div className={'container d-flex justify-content-center'}>
      <img src={Logo} alt="" height={100}/>
    </div>
    <Landing/>
    {/*<ProjectList projects={projects}/>*/}
  </>
);
