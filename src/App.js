
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from "./StartPage";
import Dashboard from "./Dashboard";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<StartPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    )
}

export default App;
