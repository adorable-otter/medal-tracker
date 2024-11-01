function Button({ value, type, onClick, className }) {
  return <button className={className} onClick={onClick} type={type}>{value}</button>;
}

export default Button;
