// import PropTypes from "prop-types";
import "../../assets/style/Dashboard/Table.css";
import { calculateTotal } from "../../utils/helpers/calculateTotalPrice";
function Table() {
  const subscriptionsData = JSON.parse(localStorage.getItem("data")) || [];
  return (
    <table className="subscriptionsTable">
      <thead>
        <tr>
          {[
            "ID",
            "Name",
            "Email",
            "Phone number",
            "SelectedPlan",
            "SelectedAddOns",
            "SubscriptionType",
            "Total",
          ].map((el, index) => (
            <th key={index}>
              <span className="text">{el}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {subscriptionsData.map((subscription, key) => (
          <tr key={key}>
            <td>
              <span className="text">{key + 1}</span>
            </td>
            <td>
              <span className="text">{subscription?.name}</span>
            </td>
            <td>
              <span className="text">{subscription?.email}</span>
            </td>
            <td>
              <span className="text">{subscription?.phoneNumber}</span>
            </td>
            <td>
              <span className="text">{subscription?.selectedPlan.name}</span>
            </td>
            <td>
              <span className="text flex">
                {subscription?.selectedAddOns.map((addOns, index) => (
                  <li key={index}>{addOns.name}</li>
                ))}
              </span>
            </td>
            <td>
              <span className="text">{subscription?.subscriptionType}</span>
            </td>
            <td>
              <span className="total">{`$ ${calculateTotal(
                subscription?.selectedPlan?.price,
                subscription.selectedAddOns
              )}/${
                subscription?.subscriptionType === "yearly" ? "yr" : "mo"
              }`}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {};

export default Table;
