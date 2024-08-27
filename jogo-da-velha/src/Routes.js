import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Perfil from "./Pages/Perfil";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/Perfil' element={<Perfil/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;