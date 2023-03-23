import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import { ShopContextProvider } from "./context/ShopContext";
import ShopPage from "./pages/ShopPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <ShopContextProvider>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/products" element={<ProductsPage />}></Route>
            <Route path="/products/:id" element={<SingleProductPage />}></Route>
            <Route path="/shop" element={<ShopPage />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
          <Newsletter />
        </div>
      </ShopContextProvider>
    </Router>
  );
}

export default App;
