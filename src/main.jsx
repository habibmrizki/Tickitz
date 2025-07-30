import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MovieDekstop from "./pages/MovieDekstop.jsx";
import SignIn from "./pages/auth/SignIn.jsx";
import SignUp from "./pages/auth/SingUp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <SignUp /> */}
    {/* <SignIn /> */}
    <MovieDekstop />
  </StrictMode>
);
