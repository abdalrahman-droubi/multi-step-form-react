export function calculateTotal(planPrice, addOnsPrice) {
  const price1 = Number(planPrice.split("/")[0]);
  const price2 = addOnsPrice.reduce((acc, current) => {
    return (acc += Number(current.price.split("/")[0]));
  }, 0);
  return price1 + price2;
}
