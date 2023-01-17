import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import "./app.css";
import "./assets/fontawesome/css/all.min.css";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
