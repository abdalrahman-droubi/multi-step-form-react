import PropTypes from "prop-types";
import StepsHeader from "../../components/StepsHeader";
import "../../assets/style/SubscriptionForm/Step3.css";
import { addOnsData } from "../../assets/Data/add-onsData.js";
function Step3({ subscriptionType }) {
  return (
    <section className="addOnsForm">
      <StepsHeader
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience"
      />
      <form className="checkBoxForm">
        {addOnsData[subscriptionType].map((addOns, index) => (
          <label
            className="chexkBoxContainer"
            htmlFor={addOns.name}
            key={index}
          >
            <div>
              <input type="checkbox" id={addOns.name} />
              <span>
                <h4 htmlFor={addOns.name}>{addOns.name}</h4>
                <div htmlFor={addOns.name} className="description">
                  {addOns.description}
                </div>
              </span>
            </div>
            <span>{addOns.price}</span>
          </label>
        ))}
      </form>
    </section>
  );
}

Step3.propTypes = {
  subscriptionType: PropTypes.string,
};

export default Step3;
