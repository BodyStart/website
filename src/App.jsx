import './App.css'
import {Route, Routes} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Quisuije from './pages/Quisuije';
import Programme from './pages/Programme';
import Abonnement from './pages/Abonnement';


function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/programme" element={<Programme />} />
                <Route path="/abonnement" element={<Abonnement />} />
                <Route path="/adam-charles-bio" element={<Quisuije />} />
            </Routes>
        </>
    )
}

export default App
