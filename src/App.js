import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Protected from "./components/Protected"
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store from "./redux/store";



function App() {
  return (
    <Provider store={store}>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/detail/:Id" element={<Detail />} />
            <Route
              path="/"
              element={
                <Protected>
                  <Home />
                </Protected>
              }
            />
            <Route
              path="/dashboard"
              element={
                <Protected>
                  <Dashboard />
                </Protected>
              }
            />
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>
  );
}

export default App;
