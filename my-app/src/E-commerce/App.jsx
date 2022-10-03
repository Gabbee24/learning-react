import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/Authentication.component";
import Shop from "./routes/shop/shop.component";
import Shop2 from "./routes/shop/shop2.component";

function App(){

    return(
        <Routes>
            <Route path="/" element={ <Navigation/>}>
                <Route index element={<Home/>} />
                <Route path="shop" element={<Shop2/>} /> 
                <Route path="auth" element={<Authentication/>} />
            </Route>
        </Routes>
        );
    }

export default App;