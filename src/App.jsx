import './App.css'
import {Route, Routes} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Quisuije from './pages/Quisuije';
import Programme from './pages/Programme';
import Abonnement from './pages/Abonnement';
import Connexion from './pages/Connexion.jsx';
import DebutantProgramme from "./pages/DebutantProgramme.jsx";
import AvanceeProgramme from "./pages/AvanceeProgramme.jsx";
import BodybuilderProgramme from "./pages/BodybuilderProgramme.jsx";
import PersonnaliseProgramme from "./pages/PersonnaliseProgramme.jsx";
import DemandeProgramme from "./pages/DemandeProgramme.jsx";
import Footer from './components/Footer';


function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/programme" element={<Programme />} />
                <Route path="/abonnement" element={<Abonnement />} />
                <Route path="/story" element={<Quisuije />} />
                <Route path="/connexion" element={<Connexion />} />
                <Route path="/programme/debutant" element={<DebutantProgramme />} />
                <Route path="/programme/avancee" element={<AvanceeProgramme />} />
                <Route path="/programme/bodybuilder" element={<BodybuilderProgramme />} />
                <Route path="/programme/personnalise" element={<PersonnaliseProgramme />} />
                <Route path="/programme/demande" element={<DemandeProgramme />} />
            </Routes>
            <Footer/>
        </>
    )
}

export default App
