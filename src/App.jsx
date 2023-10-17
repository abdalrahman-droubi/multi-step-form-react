import { Route, Routes } from "react-router-dom";
// import SubscriptionForm from "./pages/SubscriptionForm";
// import Dashboard from "./pages/Dashboard";
// import Login from "./containers/Dashboard/Login";
import "./assets/style/Dashboard/main_dashboard.css";
import "./assets/style/SubscriptionForm/main_subscr.css";
import { routes } from "./routes.jsx";
function App() {
  return (
    <div className="mainContainer">
      <Routes>
        {routes.map(({ layout, pages, homePage }) => {
          return layout === "subscriptionPage" ? (
            pages.map(({ name, path, element }) => (
              <Route
                path={path}
                element={element}
                key={`subscription_${name}`}
              />
            ))
          ) : layout === "dashboardPage" ? (
            <Route path="/dashboard/*" key="dashboard_home">
              <Route index element={homePage} key={`dashboard_${homePage}`} />
              {pages.map(({ name, path, element }) => {
                return (
                  <Route
                    path={path}
                    element={element}
                    key={`dashboard_${name}`}
                  />
                );
              })}
            </Route>
          ) : null;
        })}
      </Routes>
    </div>
  );
}

export default App;
