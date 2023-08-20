import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/404";
import Conferences from "./pages/Conferences";
import Internships from "./pages/Internships";
import Education from "./pages/Education";
import Certificates from "./pages/Certificates";
import Contribute from "./pages/Contribute";

function App() {
    return (
        <Router>
            <Sidebar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="/conferences" element={<Conferences />} />
                <Route path="/internships" element={<Internships />} />
                <Route path="/education" element={<Education />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/contribute" element={<Contribute />} />
            </Routes>
        </Router >
    );
}

export default App;