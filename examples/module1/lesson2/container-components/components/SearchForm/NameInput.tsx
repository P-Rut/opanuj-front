function NameInput({ value, setValue }: any) {
  return (
    <label className="flex flex-col">
      Name
      <input
        className="border h-7 mt-1 indent-2"
        type="text"
        placeholder="Rick Sanchez..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  );
}

export default NameInput;
