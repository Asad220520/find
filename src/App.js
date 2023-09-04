import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Agents from "./components/Agents";
import Buy from "./components/Buy";
import Reviews from "./components/Reviews";
import Rent from "./components/Rent";
import TelegramForm from "./components/TelegramForm";

function App() {
  return (
    <div className="App">
      <Header />
      <TelegramForm/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
