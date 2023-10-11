import PropTypes from "prop-types";

function Button({
  bgColor = "#174a8b",
  color = "#fff",
  onClick,
  disabled = false,
  children,
}) {
  const ButtonStyle = {
    backgroundColor: bgColor,
    color: color,
    padding: "15px 20px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  };
  return (
    <button style={ButtonStyle} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
