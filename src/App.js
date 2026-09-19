import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./frontend/home";
import Login from "./frontend/login";
import Signup from "./frontend/signup";
import Features from "./frontend/features";
import Workout from "./frontend/workout";
import Nutrition from "./frontend/nutrition";
import Footer from "./frontend/footer";
import Help from "./frontend/help";
import Contact from "./frontend/contact";
import Privacy from "./frontend/privacy";
import Condition from "./frontend/condition";
import Membership from "./frontend/membership";
import Shop from "./frontend/shop";
import Progress from "./frontend/progress";
import Checkout from "./frontend/checkout";
import Started from "./frontend/started";
import Loss from "./frontend/loss";
import Gain from "./frontend/gain";
import Strength from "./frontend/strength";
import Fitness from "./frontend/fitness";
import Beginner from "./frontend/beginner";
import Intermediate from "./frontend/intermediate";
import Advance from "./frontend/advance";
import Expert from "./frontend/expert";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/features" element={< Features />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/nutrition" element={< Nutrition />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/condition" element={<Condition />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/started" element={<Started />} />
        <Route path="/loss" element={<Loss />} />
        <Route path="/gain" element={<Gain />} />
        <Route path="/strength" element={<Strength />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/beginner" element={<Beginner />} />
        <Route path="/intermediate" element={<Intermediate />} />
        <Route path="/advance" element={<Advance />} />
        <Route path="/expert" element={<Expert />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;