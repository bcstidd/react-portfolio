import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import projectsPage from '../ProjectsPage/ProjectsPage';
import {AboutMePage} from '../AboutMePage/AboutMePage'


function App() {
  return (
    <>
    <Router>
    <NavBar />
    <Route path="/" element={<AboutMePage />} />
    <h1>Home</h1>

    </Router>
  </>
  );
}
export default App;
