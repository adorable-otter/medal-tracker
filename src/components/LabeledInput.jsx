function LabeledInput({ id, label, holder }) {
  return (
    <div className="labeled-input">
      <label for={id}>{label}</label>
      <input name={id} placeholder={holder}></input>
    </div>
  );
}

export default LabeledInput;
