import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import OlympicMedalList from './components/OlymphicMedalList';

function App() {
  const [medalList, setMedalList] = useState([]);

  const handleSubmit = () => {};

  return (
    <div className="container">
      <Header />
      <OlympicMedalList />
      {/* <div className="main"></div> */}
    </div>
  );
}

export default App;
