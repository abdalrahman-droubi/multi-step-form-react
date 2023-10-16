import { Route, Routes } from "react-router-dom";
import SubscriptionForm from "./pages/SubscriptionForm";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import Login from "./containers/Dashboard/Login";
function App() {
  return (
    <div className="mainContainer">
      <Routes>
        <Route path="/" element={<SubscriptionForm />} />
        <Route path="/dashboard/*">
          <Route index element={<Login />} />
          <Route path="/dashboard/*subscriptionInfo" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
