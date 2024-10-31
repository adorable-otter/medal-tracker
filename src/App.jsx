import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { storage } from './storage';
import Main from './components/Main';

function App() {
  const [medalRecordList, setMedalRecordList] = useState(storage.getContentList());

  return (
    <div className="container">
      <Header medalRecordList={medalRecordList} setMedalRecordList={setMedalRecordList} />
      <Main medalRecordList={medalRecordList} setMedalRecordList={setMedalRecordList} />
    </div>
  );
}

export default App;
