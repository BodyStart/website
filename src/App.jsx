import './App.css'
import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="blogs" element={<Blogs/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
