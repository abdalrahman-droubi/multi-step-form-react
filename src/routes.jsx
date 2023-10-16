import Login from "./containers/Dashboard/Login";
import Dashboard from "./pages/Dashboard";
import SubscriptionForm from "./pages/SubscriptionForm";

export const routes = [
  {
    layout: "subscriptionPage",
    pages: [
      {
        name: "subscriptionFrom",
        path: "/",
        element: <SubscriptionForm />,
      },
    ],
  },
  {
    layout: "dashboardPage",
    homePage: <Login />,
    pages: [
      {
        name: "subscriptionFrom",
        path: "/dashboard/*subscriptionInfo",
        element: <Dashboard />,
      },
    ],
  },
];
