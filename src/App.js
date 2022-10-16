import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home/Home";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Sobre from "./Components/Pages/Sobre/Sobre";
import Loja from "./Components/Pages/Loja/Loja";
import QtdProvider from "./context/qtdContext";
import MenuMobile from "./Components/Header/MenuMobile/MenuMobile";
import { useEffect, useState } from "react";
import { Loading } from "./Components/Loading/Loading";
import Contato from "./Components/Pages/Contato/Contato";

function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])

  return (
    <QtdProvider>
      {loading ? <Loading /> : 
        <BrowserRouter>
          <div className="mobile_app">
            <MenuMobile />
          </div>
          <div className="header_app">
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/sobre" element={<Sobre />}></Route>
            <Route path="/loja" element={<Loja />}></Route>
            <Route path="/contato" element={<Contato />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      }
    </QtdProvider>
  );
}

export default App;
