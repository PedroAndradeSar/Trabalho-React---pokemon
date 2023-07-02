import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home  from "../pages/Home";
import PokemonProfile from "../pages/PokemonProfile";

export const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<PokemonProfile  />} />;
      </Routes>
    </BrowserRouter>
  );
};

export default  Router;