import { useState } from "react";
import "../assets/style/SubscriptionForm/style.css";
import Button from "../components/Button";
import SideBar from "../containers/SubscriptionForm/SideBar";
import Step1 from "../containers/SubscriptionForm/Step1";
import useFormValidation from "../utils/customHooks/useFormValidation";
import { validationRules } from "../components/validationRules";

function SubscriptionForm() {
  const [activeStep, setActiveStep] = useState(0);
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
    if (isFormValid) {
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
          <div className="buttonsContainer">
            <Button
              onClick={handleNext}
              disabled={activeStep > 4 ? true : false}
            >
              {activeStep === 4 ? "Confirm" : "Next Step"}
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
