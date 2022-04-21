import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import "./App.css";
import ScrollToTop from "react-scroll-to-top";
import Casestudy from "./Casestudy";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/case-studies/:slug" element={<Casestudy />} />
          <Route path="/" element={<Home />} />

          
        </Routes>
        <Footer />
        <ScrollToTop smooth color="#000000" />
      </BrowserRouter>
    </div>
  );
}

export default App;
