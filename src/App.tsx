import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import components
import Sidebar from "./components/Sidebar";
import ScrollToTop from "./components/ScrollToTop";
//import pages
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/404";
import Companies from "./pages/Companies";
import Conferences from "./pages/Conferences";
import Internships from "./pages/Internships";
import Education from "./pages/Education";
import Certificates from "./pages/Certificates";
import Contribute from "./pages/Contribute";
import ThankYou from "./pages/ThankYou";
import DataOverview from "./pages/DataOverview";

function App() {
    return (
        <Router>
            <Sidebar />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="/companies" element={<Companies />} />
                <Route path="/conferences" element={<Conferences />} />
                <Route path="/internships" element={<Internships />} />
                <Route path="/education" element={<Education />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/contribute" element={<Contribute />} />
                <Route path="/thankyou" element={<ThankYou />} />
                <Route path="/data" element={<DataOverview />} />
            </Routes>
        </Router >
    );
}

export default App;