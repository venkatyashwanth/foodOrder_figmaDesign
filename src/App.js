import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavigationBar from "./components/NavigationBar";
import LandingPage from "./components/LandingPage";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <div className="foodDeliveryAppBg">
      <Router>
        <ToastContainer />
        <NavigationBar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
