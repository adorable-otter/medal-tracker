import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import OlympicMedalList from './components/OlympicMedalList';
import SortOptions from './components/SortOptions';
import { storage } from './storage';

function App() {
  const [medalList, setMedalList] = useState(storage.getContentList());
  const [sortOption, setSortOption] = useState('goldMedal');

  const handleFormSubmit = (newMedalRecord) => {
    if (medalList.find((medal) => medal.country === newMedalRecord.country)) {
      return alert('이미 등록된 국가입니다.');
    }
    setMedalList([...medalList, newMedalRecord]);
  };

  const handleDeleteButtonClick = (id) => {
    setMedalList(medalList.filter((medal) => medal.id !== id));
    storage.delete(id);
  };

  const handleUpdateButtonClick = (update) => {
    if (!medalList.find((medal) => medal.country === update.country)) {
      return alert('등록되지 않은 국가입니다.');
    }
    setMedalList(
      medalList.map((medal) => {
        if (medal.country === update.country) return update;
        return medal;
      })
    );
    storage.add(update);
    // update랑 target이랑 id가 다름. 시간이 변경돼서
  };

  const sortOptions = {
    goldMedal: (a, b) => b.gold - a.gold,
    sumOfMedals: (a, b) => b.medalsCount - a.medalsCount,
  };

  const handleSortOptionChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="container">
      <Header onSubmit={handleFormSubmit} updateMedalRecord={handleUpdateButtonClick} />
      <SortOptions onChange={handleSortOptionChange} />
      <OlympicMedalList
        medalList={medalList.toSorted(sortOptions[sortOption])}
        deleteMedalRecord={handleDeleteButtonClick}
      />
    </div>
  );
}

export default App;
