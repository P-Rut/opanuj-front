function SortByInput({ value, setValue }: any) {
  return (
    <label className="flex flex-col">
      Sort by
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border h-7 mt-1"
      >
        <option value="">Initial</option>
        <option value="name">Name</option>
        <option value="created">Created Date</option>
      </select>
    </label>
  );
}

export default SortByInput;
