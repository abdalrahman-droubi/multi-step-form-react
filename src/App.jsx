import { Route, Routes } from "react-router-dom";
import SubscriptionForm from "./pages/SubscriptionForm";
import Dashboard from "./pages/Dashboard";
import "./App.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/subscription" element={<SubscriptionForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
