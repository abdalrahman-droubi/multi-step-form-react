import PropTypes from "prop-types";
import "../../assets/style/SubscriptionForm/Step2.css";
import StepsHeader from "../../components/StepsHeader";
import { plansData } from "../../assets/Data/planData";
import PlanCard from "../../components/PlanCard";

function Step2({
  selectedPlan,
  setSlectedPlan,
  subscriptionType,
  setSubscriptionType,
  setSelectedAddOns,
}) {
  const handleSelectPlan = (index) => {
    setSlectedPlan((preSelected) => (preSelected === index ? null : index));
  };

  const handlesubscriptionType = () => {
    setSubscriptionType((preType) =>
      preType === "yearly" ? "monthly" : "yearly"
    );
    setSelectedAddOns([]);
  };
  return (
    <section className="selectPlanForm">
      <StepsHeader
        title="Select your plan"
        description="you have the option of monthly or yearly biling"
      />
      <div className="cardContainer">
        {plansData[subscriptionType]?.map((plan, index) => {
          return (
            <PlanCard
              plan={plan}
              active={selectedPlan === index ? true : false}
              key={index}
              onClick={() => handleSelectPlan(index)}
            />
          );
        })}
      </div>
      <div className="subscriptionType">
        <span>Monthly</span>
        <span className="toggle">
          <input
            type="checkbox"
            id="switch"
            checked={subscriptionType === "monthly" ? false : true}
            onChange={() => handlesubscriptionType()}
          />
          <label htmlFor="switch">Toggle</label>
        </span>
        <span>Yearly</span>
      </div>
    </section>
  );
}

Step2.propTypes = {
  selectedPlan: PropTypes.any,
  setSlectedPlan: PropTypes.any,
  subscriptionType: PropTypes.string,
  setSubscriptionType: PropTypes.func,
  setSelectedAddOns: PropTypes.func,
};

export default Step2;
