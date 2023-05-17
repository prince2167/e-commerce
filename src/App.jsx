import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/index";
import { Cart, Home, Wishlist, LandingPage, ProductDetails } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/productDetails/:productId" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
