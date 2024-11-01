function LabeledInput({ inputData, value, setValue }) {
  const { name, label, placeholder, type } = inputData;

  const handleInputChange = (e) => {
    const newValue = { ...value };
    newValue[name] = e.target.value;
    setValue(newValue);
  };

  return (
    <div className="labeled-input">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        onChange={handleInputChange}
        name={name}
        placeholder={placeholder}
        value={value[name]}
      ></input>
    </div>
  );
}

export default LabeledInput;
