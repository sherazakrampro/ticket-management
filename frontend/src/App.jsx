import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CreateTicket from "./pages/CreateTicket";
import Header from "./components/Header";
import Categories from "./pages/Categories";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import TicketPage from "./pages/TicketPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/create-ticket"
          element={
            <PrivateRoute>
              <CreateTicket />
            </PrivateRoute>
          }
        />
        <Route path="/categories" element={<Categories />} />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/logout"
          element={
            <PublicRoute>
              <logout />
            </PublicRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/tickets/:id" element={<TicketPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
