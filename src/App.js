import Project from './Components/Projects/project';
import './assets/scss/global.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import history from "./history";
import {Home} from "./Pages/home";

function App() {
  return (
    <Router history={history}>
      <Routes>
        <Route exact path="/" element={
          <Home />
        } />
        <Route path="/project/:id" element={
          <Project />
        } />
      </Routes>
    </Router>
  );
}

export default App;
