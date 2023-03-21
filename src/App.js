import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
