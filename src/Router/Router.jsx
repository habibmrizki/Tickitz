import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDekstop from "../pages/MovieDekstop.jsx";
import SignIn from "../pages/auth/SignIn.jsx";
import SignUp from "../pages/auth/SingUp.jsx";
import Home from "../pages/Home/Index.jsx";
import Index from "../pages/Home/Index.jsx";
import MoviePopular from "../components/MoviePopular.jsx";
import Payment from "../pages/Payment.jsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route />
        {/* <Route index element={<Home />} /> */}
        <Route index element={<Index />} />
        {/* <Route index element={<MovieDekstop />} /> */}
        <Route path="/auth">
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="Payment" element={<Payment />} />
        <Route path="/MovieDekstop" element={<MovieDekstop />} />
        {/* <Route path="/auth">
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}
