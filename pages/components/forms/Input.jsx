const Input = ({ id, name, type, placeholder, onChange, values }) => {
  return (
    <div>
      <div className="w-full">
        <label className="relative block">
          <input
            id={id}
            name={name}
            type={type}
            onChange={onChange}
            value={values}
            className={`h-14 w-full border border-primary outline-none px-4 peer cursor-text pt-2 ${
              type === "datetime-local" ? "pt-0" : ""
            }`}
            required
          />
          {type === "datetime-local" ? (
            ""
          ) : (
            <span className="flex items-center absolute top-0 left-0 px-4 text-base h-full peer-focus:h-7 peer-focus:text-xs peer-valid:h7 peer-valid:text-xs transition-all">
              {placeholder}
            </span>
          )}
        </label>
      </div>
    </div>
  );
};

export default Input;
