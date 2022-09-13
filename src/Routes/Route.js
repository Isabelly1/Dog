import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dogs from "../Components/Dogs";
import Home from "../Components/Home.js";
import Cats from "../Components/Cats.js";
import Header from "./Header";
import * as S from "../Components/Style/Styles.js";
export default function Router() {
  return (
    <BrowserRouter>
      <S.H1>Adote um animalzinho de estimação</S.H1>
      <Header rota="Home" rota2="Dogs" rota3="Cats" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dog" element={<Dogs />} />
        <Route path="/cat" element={<Cats />} />
      </Routes>
    </BrowserRouter>
  );
}
