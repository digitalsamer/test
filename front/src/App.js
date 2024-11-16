import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Notfount from "./component/Notfount";
import Home from "./component/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Single from "./component/Single";
import Addnew from "./component/Addnew";
import Change from "./component/Change";
import Contact from "./component/Contact";
import About from "./component/About";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-new-data" element={<Addnew />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/change/:id" element={<Change />} />
        <Route path="*" element={<Notfount />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
