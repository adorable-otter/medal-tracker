import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import OlympicMedalList from './components/OlympicMedalList';
import SortOptions from './components/SortOptions';
import { storage } from './storage';

function App() {
  const [medalRecordList, setMedalRecordList] = useState(storage.getContentList());
  const [sortOption, setSortOption] = useState('goldMedal');

  const handleFormSubmit = (newMedalRecord) => {
    if (medalRecordList.find((medal) => medal.country === newMedalRecord.country)) {
      return alert('이미 등록된 국가입니다.');
    }
    setMedalRecordList([...medalRecordList, newMedalRecord]);
    storage.add(newMedalRecord);
  };

  const handleDeleteButtonClick = (id) => {
    setMedalRecordList(medalRecordList.filter((medal) => medal.id !== id));
    storage.delete(id);
  };

  const handleUpdateButtonClick = (update) => {
    if (!medalRecordList.find((medal) => medal.country === update.country)) {
      return alert('등록되지 않은 국가입니다.');
    }
    setMedalRecordList(
      medalRecordList.map((medal) => {
        if (medal.country === update.country)  {
          update.id = medal.id;
          return update;
        }
        return medal;
      })
    );
    storage.add(update);
  };

  const sortOptions = {
    goldMedal: (a, b) => b.gold - a.gold,
    sumOfMedals: (a, b) => b.sumOfMedals - a.sumOfMedals,
  };

  const handleSortOptionChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="container">
      <Header onSubmit={handleFormSubmit} updateMedalRecord={handleUpdateButtonClick} />
      <SortOptions onChange={handleSortOptionChange} />
      <OlympicMedalList
        medalRecordList={medalRecordList.toSorted(sortOptions[sortOption])}
        deleteMedalRecord={handleDeleteButtonClick}
      />
    </div>
  );
}

export default App;
