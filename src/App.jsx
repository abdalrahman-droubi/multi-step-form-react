import { Route, Routes } from "react-router-dom";
import SubscriptionForm from "./pages/SubscriptionForm";
import Dashboard from "./pages/Dashboard";
import Login from "./containers/Dashboard/Login";
import "./assets/style/Dashboard/main_dashboard.css";
import "./assets/style/SubscriptionForm/main_subscr.css";
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
