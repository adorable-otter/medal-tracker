import LabeledInput from './LabeledInput';
import Button from './Button';
import { useState } from 'react';

function MedalForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    country: '',
    gold: '',
    silver: '',
    bronze: '',
  });

  const inputFields = [
    { id: 'country', label: '국가', placeholder: '국가 이름', type: 'text' },
    { id: 'gold', label: '금메달', placeholder: '금메달 개수', type: 'number' },
    { id: 'silver', label: '은메달', placeholder: '은메달 개수', type: 'number' },
    { id: 'bronze', label: '동메달', placeholder: '동메달 개수', type: 'number' },
  ];

  return (
    <form
      className="header__form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ newMedalRecord: formData, id: new Date().getTime() });
      }}
    >
      {inputFields.map((field) => {
        return (
          <LabeledInput key={field.id} inputData={field} value={formData} setValue={setFormData} />
        );
      })}
      <Button value="추가 하기" type="submit" />
      <Button value="업데이트" />
    </form>
  );
}

export default MedalForm;