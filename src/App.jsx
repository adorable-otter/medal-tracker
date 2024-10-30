import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import OlympicMedalList from './components/OlympicMedalList';
import SortOptions from './components/SortOptions';

function App() {
  const [medalList, setMedalList] = useState([]);
  const [sortOption, setSortOption] = useState('goldMedal');

  const handleFormSubmit = (newMedalRecord) => {
    if (medalList.find((medal) => medal.country === newMedalRecord.country)) {
      return alert('이미 등록된 국가입니다.');
    }
    setMedalList([...medalList, newMedalRecord]);
  };

  const handleDeleteButtonClick = (key) => {
    setMedalList(medalList.filter((medal) => medal.key !== key));
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

// const sumProperties = (obj) => {
//   Object.values(obj).reduce((acc, curr) => {
//     if (isNaN(curr)) return acc;
//     return acc + Number(curr);
//   }, 0);
// };

export default App;
