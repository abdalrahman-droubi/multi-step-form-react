import PropTypes from "prop-types";
import "../../assets/style/SubscriptionForm/Step4.css";
import StepsHeader from "../../components/StepsHeader";
import { calculateTotal } from "../../utils/helpers/calculateTotalPrice";

function Step4({ subscriptionData, setActiveStep }) {
  return (
    <section className="finishingUp">
      <StepsHeader
        title="Finishing up"
        description="Double-check everything looks OK before conforming"
      />
      <div className="billContainer">
        <div className="billdetails">
          <div className="billPlan">
            <span>
              <span>{`${subscriptionData?.selectedPlan?.name} (${subscriptionData?.subscriptionType})`}</span>
              <br />
              <span className="ChangeOption" onClick={() => setActiveStep(1)}>
                Change
              </span>
            </span>
            <span>{`$${subscriptionData?.selectedPlan?.price}`}</span>
          </div>
          <hr />
          {subscriptionData.selectedAddOns.map((addOns, index) => (
            <div key={index} className="billAddOns">
              <span className="billAddOnsName">{addOns.name}</span>
              <span>{`+$${addOns.price}`}</span>
            </div>
          ))}
        </div>
        <div className="totalbill">
          <span>{`Total (per ${
            subscriptionData?.subscriptionType === "yearly" ? "year" : "month"
          })`}</span>
          <span className="total">{`$ ${calculateTotal(
            subscriptionData?.selectedPlan?.price,
            subscriptionData.selectedAddOns
          )}/${
            subscriptionData?.subscriptionType === "yearly" ? "yr" : "mo"
          }`}</span>
        </div>
      </div>
    </section>
  );
}

Step4.propTypes = {
  subscriptionData: PropTypes.object,
  setActiveStep: PropTypes.func,
};

export default Step4;
