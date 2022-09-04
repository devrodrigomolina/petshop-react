import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home";
import './App.css'
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
