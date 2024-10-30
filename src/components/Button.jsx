function Button({ value, type, onClick }) {
  return <button onClick={onClick} type={type}>{value}</button>;
}

export default Button;
