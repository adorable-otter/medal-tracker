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

  return (
    <div className="container">
      <Header onSubmit={handleFormSubmit} />
      <OlympicMedalList medalList={medalList} deleteMedalRecord={handleDeleteButtonClick} />
    </div>
  );
}

export default App;
