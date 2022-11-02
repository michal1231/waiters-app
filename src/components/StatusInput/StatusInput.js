import { settings } from "../../settings/settings"

const StatusInput = ({ onChange, value }) => {
  const options = Object.values(settings.statusOptions);
  return (
    <div>
      <span>Status:</span>
      <select onChange={onChange} value={value}>
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
    </div>
  );
};

export default StatusInput;