import MedalInputForm from './MedalForm';

function Header({ onSubmit, updateMedalRecord }) {
  return (
    <div className="header">
      <h1>2024 파리 올림픽</h1>
      <MedalInputForm onSubmit={onSubmit} updateMedalRecord={updateMedalRecord}/>
    </div>
  );
}

export default Header;
