import PropTypes from "prop-types";

function PlanCard({ plan, active, onClick }) {
  return (
    <div className={active ? "planCard active" : "planCard"} onClick={onClick}>
      <img src={plan.icon} alt={`${plan.name} image`} />
      <div className="cardinfo">
        <h4>{plan.name}</h4>
        <p className="price">{`$ ${plan.price}`}</p>
        <p className="offer">{plan.offer ? plan.offer : ""}</p>
      </div>
    </div>
  );
}

PlanCard.propTypes = {
  plan: PropTypes.object,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default PlanCard;
