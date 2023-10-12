import PropTypes from "prop-types";
import StepsHeader from "../../components/StepsHeader";
import "../../assets/style/SubscriptionForm/Step3.css";
import { addOnsData } from "../../assets/Data/add-onsData.js";
import AddOnsCard from "../../components/AddOnsCard";

function Step3({ subscriptionType, selectedAddOns, setSelectedAddOns }) {
  const handleSelectedAddOns = (onsSelected) => {
    setSelectedAddOns((preData) => {
      if (preData.includes(onsSelected)) {
        return preData.filter((ele) => {
          if (ele === onsSelected) {
            return false;
          } else {
            return true;
          }
        });
      } else {
        return [...preData, onsSelected];
      }
    });
  };

  return (
    <section className="addOnsForm">
      <StepsHeader
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience"
      />
      <form className="checkBoxForm">
        {addOnsData[subscriptionType].map((addOns, index) => (
          <AddOnsCard
            key={index}
            addOns={addOns}
            onChange={handleSelectedAddOns}
            selectedAddOns={selectedAddOns}
          />
        ))}
      </form>
    </section>
  );
}

Step3.propTypes = {
  subscriptionType: PropTypes.string,
  selectedAddOns: PropTypes.array,
  setSelectedAddOns: PropTypes.func,
};

export default Step3;
