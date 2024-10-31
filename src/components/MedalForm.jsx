import LabeledInput from './LabeledInput';
import Button from './Button';
import { useState } from 'react';
import { storage } from '../storage';
import { initialFormData, inputFields } from '../constant/medalForm';

function MedalForm({ medalRecordList, setMedalRecordList }) {
  const [formData, setFormData] = useState(initialFormData);

  const onSubmit = (e) => {
    e.preventDefault();
    const newMedalRecord = new MedalRecord(formData);
    if (medalRecordList.find((medalRecord) => medalRecord.country === newMedalRecord.country)) {
      return alert('이미 등록된 국가입니다.');
    }
    setMedalRecordList([...medalRecordList, newMedalRecord]);
    storage.add(newMedalRecord);
    setFormData(initialFormData);
  };

  const onUpdate = () => {
    const toUpdate = new MedalRecord(formData);
    if (!medalRecordList.find((medalRecord) => medalRecord.country === toUpdate.country)) {
      return alert('등록되지 않은 국가입니다.');
    }
    setMedalRecordList(
      medalRecordList.map((medalRecord) => {
        if (medalRecord.country === toUpdate.country) {
          toUpdate.id = medalRecord.id;
          return toUpdate;
        }
        return medalRecord;
      })
    );
    storage.add(toUpdate);
  };

  function MedalRecord(data) {
    const record = { ...data };
    record.id = new Date().getTime();
    record.sumOfMedals = sumMedals(formData);
    return record;
  }

  const sumMedals = (medalRecord) => {
    return Number(medalRecord.gold) + Number(medalRecord.silver) + Number(medalRecord.bronze);
  };

  return (
    <form className="header__form" onSubmit={onSubmit}>
      {inputFields.map((field) => {
        return (
          <LabeledInput
            key={field.name}
            inputData={field}
            value={formData}
            setValue={setFormData}
          />
        );
      })}
      <Button value="추가 하기" type="submit" />
      <Button value="업데이트" type="button" onClick={onUpdate} />
    </form>
  );
}

export default MedalForm;
