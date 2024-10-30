import Button from './Button';

function OlympicMedalList({ medalList, deleteMedalRecord }) {
  return (
    <table className="medal-list">
      <thead>
        <tr className="medal-list__row">
          <th className="medal-list__col">국가명</th>
          <th className="medal-list__col">금메달</th>
          <th className="medal-list__col">은메달</th>
          <th className="medal-list__col">동메달</th>
          <th className="medal-list__col">액션</th>
        </tr>
      </thead>
      <tbody>
        {medalList.map(({ id, country, gold, silver, bronze }) => {
          return (
            <tr className="medal-list__row" key={id}>
              <td className="medal-list__col">{country}</td>
              <td className="medal-list__col">{gold}</td>
              <td className="medal-list__col">{silver}</td>
              <td className="medal-list__col">{bronze}</td>
              <td className="medal-list__col">
                <Button value="삭제" onClick={() => deleteMedalRecord(id)} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default OlympicMedalList;
