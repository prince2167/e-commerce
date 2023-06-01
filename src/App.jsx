import { Routes, Route } from "react-router-dom";
import { Navbar, ProtectedRoute } from "./components/index";
import {
  Cart,
  Home,
  Wishlist,
  LandingPage,
  ProductDetails,
  SignUp,
  Login,
  Profile,
  Checkout,
} from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/productDetails/:productId" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
