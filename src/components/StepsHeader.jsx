import PropTypes from "prop-types";

function StepsHeader({ title, description }) {
  return (
    <div className="formHeader">
      <h1 className="formTitle">{title}</h1>
      <p>{description}</p>
    </div>
  );
}

StepsHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default StepsHeader;
