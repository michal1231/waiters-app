import { settings } from "../../settings/settings"

const PeopleAmount = ({ amountAction, amountActionMax, value, valueMax }) => {
  const minAmount = settings.minPeopleAmount;
  const maxAmount = settings.maxPeopleAmount;

  return (
    <div>
      <span>People:</span>
      <input type="number" min={minAmount} max={maxAmount} value={value} onChange={amountAction} name="amount"></input>
      <input type="number" min={minAmount} max={maxAmount} value={valueMax} onChange={amountActionMax} name="amountMax"></input>
    </div>
  );
};

export default PeopleAmount;