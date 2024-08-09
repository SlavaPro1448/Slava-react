import "../src/css/main.css";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./component/navbar/Navbar";

import Header from "./component/Header/Header";

import Footer from "./component/footer/Footer";

import Pages from "./Pages/Pages";

import Contacts from "./Pages/Contacts";

function App() {
  return (
    <div className="App">
            
        <Navbar />

        <Header />

        <Pages />

        <Contacts />

        <Footer />
        
    </div>
  );
}

export default App;
