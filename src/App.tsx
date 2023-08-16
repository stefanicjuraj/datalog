import { BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
    return (
        <Router>
            <Sidebar />
            <Routes>
            </Routes>
        </Router >
    );
}

export default App;