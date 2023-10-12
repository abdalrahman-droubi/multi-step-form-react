import { useState } from "react";
import "../assets/style/SubscriptionForm/style.css";
import { validationRules } from "../components/validationRules";
import useFormValidation from "../utils/customHooks/useFormValidation";
import Button from "../components/Button";
import SideBar from "../containers/SubscriptionForm/SideBar";
import Step1 from "../containers/SubscriptionForm/Step1";
import Step2 from "../containers/SubscriptionForm/Step2";
import Step3 from "../containers/SubscriptionForm/Step3";

function SubscriptionForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedPlan, setSlectedPlan] = useState(null);
  const [subscriptionType, setSubscriptionType] = useState("monthly");
  const [toggle, setToggel] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const { validateForm, errors } = useFormValidation(
    personalInfo,
    setPersonalInfo,
    validationRules
  );
  const handleNext = () => {
    const isFormValid = validateForm();
    if (activeStep === 0) {
      if (isFormValid) setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (activeStep === 1) {
      if (selectedPlan !== null)
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <div className="mainContainer">
      <div className="SubscriptionPage_container">
        <SideBar activeStep={activeStep} />
        <div className="SubscriptionPage_formContainer">
          {activeStep === 0 && (
            <Step1
              personalInfo={personalInfo}
              setPersonalInfo={setPersonalInfo}
              errors={errors}
            />
          )}
          {activeStep === 1 && (
            <Step2
              selectedPlan={selectedPlan}
              setSlectedPlan={setSlectedPlan}
              subscriptionType={subscriptionType}
              setSubscriptionType={setSubscriptionType}
              toggle={toggle}
              setToggel={setToggel}
            />
          )}
          {activeStep === 2 && <Step3 subscriptionType={subscriptionType} />}
          <div className="buttonsContainer">
            <Button
              onClick={handleNext}
              disabled={activeStep >= 4 ? true : false}
            >
              {activeStep >= 3 ? "Confirm" : "Next Step"}
            </Button>
            {activeStep > 0 && (
              <Button onClick={handleBack} bgColor="white" color="#22395a">
                Go Back
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionForm;
