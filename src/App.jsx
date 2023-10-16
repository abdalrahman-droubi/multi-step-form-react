import { Route, Routes } from "react-router-dom";
import SubscriptionForm from "./pages/SubscriptionForm";
import Dashboard from "./pages/Dashboard";
import Login from "./containers/Dashboard/Login";
import "./assets/style/Dashboard/main_dashboard.css";
import "./assets/style/SubscriptionForm/main_subscr.css";
// import { routes } from "./routes.jsx";
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
      {/* <Routes>
        {routes.map(({ layout, pages, homePage }) => {
          {
            if (layout === "subscriptionPage") {
              pages.map(({ name, path, element }) => {
                console.log(path);
                return <Route path={path} element={element} key={name} />;
              });
            } else if (layout === "dashboardPage")
              <Route path="/dashboard/*">
                <Route index element={homePage} />
                {pages.map(({ name, path, element }) => {
                  <Route path={path} element={element} key={name} />;
                })}
              </Route>;
          }
        })}
      </Routes> */}
    </div>
  );
}

export default App;
