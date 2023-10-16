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
    pages: [
      {
        name: "subscriptionFrom",
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
];
