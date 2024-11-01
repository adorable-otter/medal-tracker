import { storage } from '../storage';
import Button from './Button';

function OlympicMedalList({ medalRecordList, setMedalRecordList }) {
  const handleDeleteButtonClick = ({ id, country }) => {
    if (!confirm(`${country}에 대한 정보를 삭제 하시겠습니까?`)) return;
    setMedalRecordList(medalRecordList.filter((medalRecord) => medalRecord.id !== id));
    storage.delete(id);
  };

  return (
    <table className="medal-list">
      <thead>
        <tr className="medal-list__head">
          <th className="medal-list__col">국가명</th>
          <th className="medal-list__col">금메달</th>
          <th className="medal-list__col">은메달</th>
          <th className="medal-list__col">동메달</th>
          <th className="medal-list__col">액션</th>
        </tr>
      </thead>
      <tbody>
        {medalRecordList.map(({ id, country, gold, silver, bronze }) => {
          return (
            <tr className="medal-list__row" key={id}>
              <td className="medal-list__col">{country}</td>
              <td className="medal-list__col">{gold}</td>
              <td className="medal-list__col">{silver}</td>
              <td className="medal-list__col">{bronze}</td>
              <td className="medal-list__col">
                <Button className="btn btn_delete" value="삭제" onClick={() => handleDeleteButtonClick({ id, country })} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default OlympicMedalList;
