import MedalInputForm from './MedalForm';

function Header({ medalRecordList, setMedalRecordList }) {
  return (
    <header className="header">
      <h1>2024 파리 올림픽</h1>
      <MedalInputForm medalRecordList={medalRecordList} setMedalRecordList={setMedalRecordList} />
    </header>
  );
}

export default Header;
