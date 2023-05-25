const Input = ({
  id,
  name,
  type,
  placeholder,
  onChange,
  value,
  actions,
  errorsMessage,
  touched,
  handleBlur,
}) => {
  console.log(errorsMessage);
  return (
    <div>
      <div className="w-full">
        <label className="relative block">
          <input
            id={id}
            name={name}
            type={type}
            onChange={onChange}
            value={value}
            actions={actions}
            onBlur={handleBlur}
            touched={touched}
            className={`h-14 w-full border outline-none px-4 peer cursor-text pt-2 ${
              type === "datetime-local" ? "pt-0" : ""
            } ${errorsMessage ? "border-red-500" : "border-primary"} 
            }`}
            required
          />
          {type === "datetime-local" ? (
            ""
          ) : (
            <span className="flex items-center absolute top-0 left-0 px-4 text-base h-full peer-focus:h-7 peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs transition-all">
              {placeholder}
            </span>
          )}
          {errorsMessage && <span className=" text-red-500">{errorsMessage}</span>}
        </label>
      </div>
    </div>
  );
};

export default Input;
