import PropTypes from "prop-types";

function AddOnsCard({ addOns, onChange, selectedAddOns }) {
  return (
    <label
      className={
        selectedAddOns.includes(addOns)
          ? "chexkBoxContainer active"
          : "chexkBoxContainer"
      }
      htmlFor={addOns.name}
    >
      <div>
        <input
          type="checkbox"
          id={addOns.name}
          onChange={() => onChange(addOns)}
          checked={selectedAddOns.includes(addOns)}
        />
        <span>
          <h4 htmlFor={addOns.name}>{addOns.name}</h4>
          <div htmlFor={addOns.name} className="description">
            {addOns.description}
          </div>
        </span>
      </div>
      <span>{addOns.price}</span>
    </label>
  );
}

AddOnsCard.propTypes = {
  addOns: PropTypes.object,
  onChange: PropTypes.func,
  selectedAddOns: PropTypes.array,
};

export default AddOnsCard;
