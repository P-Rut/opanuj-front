// eslint-disable-next-line react/prop-types
function SortInput({ value, setValue }) {
  return (
    <label className="flex flex-col">
      Sort by
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border h-7 mt-1"
      >
        <option value="alfabetical">Alfabetical order</option>
        <option value="population">Population</option>
      </select>
    </label>
  );
}

export default SortInput;
