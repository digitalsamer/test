import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Indax from './component/Indax';
import Head from './component/layout/Head';
import Foot from './component/layout/Foot';
import Aboutus from "./component/Aboutus";
import ContactUs from "./component/Contact_us";
import Checkout from "./component/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Head/>
        <Routes>

            <Route path="/" element={<Indax />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/checkout" element={<Checkout />} />

        </Routes>
      <Foot/>
    </BrowserRouter>
  );
}

export default App;
