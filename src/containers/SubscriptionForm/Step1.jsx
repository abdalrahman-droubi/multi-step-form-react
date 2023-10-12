import "../../assets/style/SubscriptionForm/Step1.css";
import ProtoType from "prop-types";
import useFormValidation from "../../utils/customHooks/useFormValidation";
import StepsHeader from "../../components/StepsHeader";

function Step1({ personalInfo, setPersonalInfo, errors }) {
  const { handleChange } = useFormValidation(personalInfo, setPersonalInfo);

  return (
    <section className="personalInfoForm">
      <StepsHeader
        title="Personal info"
        description="please provide your name, email, address, and phone number"
      />

      <form>
        <div className="formField">
          <div className="label">
            <label htmlFor="name">Name*</label>
            <p className={errors.name ? "error" : ""}>{errors?.name}</p>
          </div>
          <input
            type="text"
            id="name"
            name="name"
            className={errors.name ? "error" : ""}
            value={personalInfo.name}
            onChange={handleChange}
          />
        </div>
        {/* -------------------------------------------------------------------------- */}
        <div className="formField">
          <div className="label">
            <label htmlFor="email">Email Address*</label>
            <p className={errors.email ? "error" : ""}>{errors?.email}</p>
          </div>
          <input
            type="email"
            id="email"
            name="email"
            className={errors.email ? "error" : ""}
            value={personalInfo?.email}
            onChange={handleChange}
          />
        </div>
        {/* ----------------------------------------------------------------- */}
        <div className="formField">
          <div className="label">
            <label htmlFor="phoneNumber">Phone Number*</label>
            <p className={errors.phoneNumber ? "error" : ""}>
              {errors?.phoneNumber}
            </p>
          </div>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            className={errors.phoneNumber ? "error" : ""}
            value={personalInfo?.phoneNumber}
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
}
Step1.propTypes = {
  errors: ProtoType.object,
  personalInfo: ProtoType.object,
  setPersonalInfo: ProtoType.func,
};
export default Step1;
