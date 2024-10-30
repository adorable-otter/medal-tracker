function SortOptions({onChange}) {
  return (
    <select className="sort-option" onChange={onChange}>
      <option value="goldMedal">금메달 개수</option>
      <option value="sumOfMedals">모든 메달 합계</option>
    </select>
  );
}

export default SortOptions;
