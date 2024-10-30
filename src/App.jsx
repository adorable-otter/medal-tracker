import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import OlympicMedalList from './components/OlympicMedalList';

function App() {
  const [medalList, setMedalList] = useState([]);

  const handleFormSubmit = (newMedalRecord) => {
    setMedalList([...medalList, newMedalRecord]);
  };

  const handleDeleteButtonClick = (key) => {
    setMedalList(medalList.filter((medal) => medal.key !== key));
  };

  const handleUpdateButtonClick = (update) => {
    if (!medalList.find((medal) => medal.country === update.country)) {
      alert('등록되지 않은 국가입니다.');
      return;
    }
    setMedalList(
      medalList.map((medal) => {
        if (medal.country === update.country) return update;
        return medal;
      })
    );
  };

  return (
    <div className="container">
      <Header onSubmit={handleFormSubmit} updateMedalRecord={handleUpdateButtonClick} />
      <OlympicMedalList medalList={medalList} deleteMedalRecord={handleDeleteButtonClick} />
    </div>
  );
}

export default App;
