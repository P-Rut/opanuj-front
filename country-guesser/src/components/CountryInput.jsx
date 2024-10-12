// eslint-disable-next-line react/prop-types
function CountryInput({ value, setValue }) {
  return (
    <label className="flex flex-col w-full">
      Country
      <input
        className="border h-7 mt-1 indent-2 w-full"
        type="text"
        placeholder="Italy..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  );
}

export default CountryInput;
