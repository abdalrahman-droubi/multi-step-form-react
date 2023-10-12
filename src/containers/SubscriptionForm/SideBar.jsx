import "../../assets/style/SubscriptionForm/SideBar.css";
import PropTypes from "prop-types";
function SideBar({ activeStep }) {
  const SideBarContent = ["your info", "select plan", "add-ons", "summary"];

  return (
    <section className="SubscriptionPage_sideBar">
      {SideBarContent.map((step, index) => {
        return (
          <div key={index} className="stepContainers">
            <span
              className={index === activeStep ? "StepIcon active" : "StepIcon"}
            >
              {index + 1}
            </span>
            <div>
              <p className="stepNum">step {index + 1}</p>
              <p className="stepName">{step}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
SideBar.propTypes = {
  activeStep: PropTypes.number,
};
export default SideBar;
