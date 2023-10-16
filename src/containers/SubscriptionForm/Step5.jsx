// import PropTypes from "prop-types";
// import "../../assets/style/SubscriptionForm/Step5.css";
import thxIcon from "../../assets/images/icon-thank-you.svg";
function Step5() {
  return (
    <section className="thanksSection">
      <img src={thxIcon} alt="thxIcon" />
      <div>
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </section>
  );
}

// Step5.propTypes = {};

export default Step5;
