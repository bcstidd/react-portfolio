import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import AboutMePage from '../AboutMePage/AboutMePage'


export default function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<AboutMePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  </>
  );
}

