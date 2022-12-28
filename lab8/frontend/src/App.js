import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/loginPage"
import { HomePage } from "./pages/homePage"
import { RegisterPage } from "./pages/registerPage"
import { AdminPage } from "./pages/adminPage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export {App};
