import QuoteGenerator from "./QuoteGenerator";
import PasswordManager from "./PasswordManager";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";
import Home from "./Home";

const App = () => {
  return (
    <>
      <div>
        <Router>
          <Header/>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/quote-gen" element={<QuoteGenerator />} />
            <Route path="/pass-manager" element={<PasswordManager />} />
            <Route path="/meme-gen" element={<MemeGenerator />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
