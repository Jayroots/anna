import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PassionPage from "../pages/PassionPage";
import CreationPage from "../pages/CreationPage";


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/passions" element={<PassionPage />} />
            <Route path="/creations" element={<CreationPage/>}/>

        </Routes>
    );
};

export default Router;