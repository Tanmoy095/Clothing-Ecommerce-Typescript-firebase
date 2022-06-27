import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home.component";
import Navigation from "./routes/Navigation/Navigation.component";
import SignIn from "./routes/Sign-In/SignIn.component";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />

        <Route path="shop" />
      </Route>
    </Routes>
  );
}
export default App;
