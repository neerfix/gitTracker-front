import Project from './Components/Projects/project';
import './assets/scss/global.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import history from "./history";
import {Home} from "./Pages/home";
import { Projects } from "./Pages/Projects";
import { Settings } from "./Pages/Settings";
import {ProjectDashboard} from "./Pages/ProjectDashboard";

function App() {
  return (
    <Router history={history}>
      <Routes>
        <Route exact path="/" element={
          <Home />
        } />
        <Route exact path="/projects" element={
          <Projects />
        } />
        <Route exact path="/settings" element={
          <Settings />
        } />
        <Route exact path="/dashboard" element={
          <ProjectDashboard />
        } />
        <Route path="/project/:id" element={
          <Project />
        } />
      </Routes>
    </Router>
  );
}

export default App;
