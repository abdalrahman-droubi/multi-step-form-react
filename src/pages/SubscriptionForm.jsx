import { useState } from "react";
// import "../assets/style/SubscriptionForm/style.css";
import { validationRules } from "../assets/Data/validationRules";
import useFormValidation from "../utils/customHooks/useFormValidation";
import Button from "../components/Button";
import SideBar from "../containers/SubscriptionForm/SideBar";
import Step1 from "../containers/SubscriptionForm/Step1";
import Step2 from "../containers/SubscriptionForm/Step2";
import Step3 from "../containers/SubscriptionForm/Step3";
import Step4 from "../containers/SubscriptionForm/Step4";
import Step5 from "../containers/SubscriptionForm/Step5";
import { plansData } from "../assets/Data/planData";

function SubscriptionForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [subscriptionType, setSubscriptionType] = useState("monthly");
  const [selectedPlan, setSlectedPlan] = useState(null);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const { validateForm, errors } = useFormValidation(
    personalInfo,
    setPersonalInfo,
    validationRules
  );
  const subscriptionData = {
    ...personalInfo,
    subscriptionType,
    selectedPlan: plansData[subscriptionType][selectedPlan],
    selectedAddOns: selectedAddOns,
  };

  const handleNext = () => {
    const isFormValid = validateForm();
    if (activeStep === 0) {
      if (isFormValid) setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (activeStep === 1) {
      if (selectedPlan !== null)
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (activeStep === 2) {
      if (selectedAddOns.length !== 0) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }
  };
  const handleConfirm = () => {
    const data = JSON.parse(localStorage.getItem("data")) || [];
    data.push(subscriptionData);
    localStorage.setItem("data", JSON.stringify(data));
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // setTimeout(() => {
    //   setActiveStep(0);
    //   setPersonalInfo({
    //     name: "",
    //     email: "",
    //     phoneNumber: "",
    //   });
    //   setSubscriptionType("monthly");
    //   setSlectedPlan(null);
    //   setSelectedAddOns([]);
    // }, 3000);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <>
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
              setSelectedAddOns={setSelectedAddOns}
            />
          )}
          {activeStep === 2 && (
            <Step3
              subscriptionType={subscriptionType}
              selectedAddOns={selectedAddOns}
              setSelectedAddOns={setSelectedAddOns}
            />
          )}
          {activeStep === 3 && (
            <Step4
              subscriptionData={subscriptionData}
              setActiveStep={setActiveStep}
            />
          )}
          {activeStep === 4 && <Step5 />}

          <div className="buttonsContainer">
            {activeStep >= 0 && activeStep < 4 && (
              <Button
                onClick={activeStep >= 3 ? handleConfirm : handleNext}
                disabled={activeStep >= 4 ? true : false}
              >
                {activeStep === 3 ? "Confirm" : "Next Step"}
              </Button>
            )}
            {activeStep > 0 && activeStep < 4 && (
              <Button onClick={handleBack} bgColor="white" color="#22395a">
                Go Back
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SubscriptionForm;
