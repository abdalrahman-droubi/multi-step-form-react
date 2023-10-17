import Login from "./containers/Dashboard/Login";
import Dashboard from "./pages/Dashboard";
import SubscriptionForm from "./pages/SubscriptionForm";

export const routes = [
  {
    layout: "subscriptionPage",
    pages: [
      {
        name: "subscriptionForm",
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
        name: "dashboardtable",
        path: "subscriptionInfo",
        element: <Dashboard />,
      },
    ],
  },
];
