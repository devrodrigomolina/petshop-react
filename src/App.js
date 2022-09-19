import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home/Home";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Sobre from "./Components/Pages/Sobre/Sobre";
import Loja from "./Components/Pages/Loja/Loja";
import QtdProvider from "./context/qtdContext";
import MenuMobile from './Components/Header/MenuMobile/MenuMobile'

function App() {
  return (
    <QtdProvider>   
    <BrowserRouter>
        <Header />
      
        <MenuMobile />
  
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
          <Route path="/loja" element={<Loja />}></Route>
        </Routes>
        <Footer />
    </BrowserRouter>
    </QtdProvider>

  );
}

export default App;
