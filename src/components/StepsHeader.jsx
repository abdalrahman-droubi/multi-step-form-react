import PropTypes from "prop-types";

function StepsHeader(children) {
  return (
    <div className="formHeader">
      <h1 className="formTitle">Personal info{children.title}</h1>
      <p>
        please provide your name, email, address, and phone number
        {children.description}
      </p>
    </div>
  );
}

StepsHeader.propTypes = {
  children: PropTypes.object,
};

export default StepsHeader;
