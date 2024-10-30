function LabeledInput({ inputData, value, setValue }) {
  const { id, label, placeholder } = inputData;

  const handleInputChange = (e) => {
    const newValue = {...value};
    newValue[id] = e.target.value;
    setValue(newValue);
  };

  return (
    <div className="labeled-input">
      <label htmlFor={id}>{label}</label>
      <input onChange={handleInputChange} name={id} placeholder={placeholder} value={value[id]}></input>
    </div>
  );
}

export default LabeledInput;
