import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home.component";
import Navigation from "./routes/Navigation/Navigation.component";
import Authentication from "./routes/Authentication/Authentication.component";
import Shop from "./routes/shop/Shop.component";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />

        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}
export default App;
