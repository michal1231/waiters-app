const BillInput = ({ onChange, value }) => {
  return (
    <div>
      <span>Bill:</span>
      <input type="number" min={0} value={value} onChange={onChange} name="bill"></input>
    </div>
  );
};

export default BillInput;