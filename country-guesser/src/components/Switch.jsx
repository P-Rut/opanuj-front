// eslint-disable-next-line react/prop-types
function Switch({ value, setValue }) {
  const handleChange = () => {
    setValue(!value);
  };
  return (
    <label className="inline-flex items-center cursor-pointer mt-5">
      <input
        type="checkbox"
        value={value}
        className="sr-only peer"
        onChange={handleChange}
      />
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
      <span
        className={`ms-3 text-sm font-medium text-gray-900 dark:text-gray-300${
          value ? '' : 'text-gray-900'
        }`}
      >
        Guess mode
      </span>
    </label>
  );
}

export default Switch;
