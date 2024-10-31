import { useState } from 'react';
import OlympicMedalList from './OlympicMedalList';
import SortOptions from './SortOptions';

const sortOptions = {
  goldMedal: (a, b) => b.gold - a.gold,
  sumOfMedals: (a, b) => b.sumOfMedals - a.sumOfMedals,
};

function Main({ medalRecordList, setMedalRecordList }) {
  const [sortOption, setSortOption] = useState('goldMedal');

  return (
    <main className="main">
      <SortOptions setSortOption={setSortOption} />
      <OlympicMedalList
        medalRecordList={medalRecordList.toSorted(sortOptions[sortOption])}
        setMedalRecordList={setMedalRecordList}
      />
    </main>
  );
}

export default Main;
