import LabeledInput from './LabeledInput';
import Button from './Button';
import { useState } from 'react';
import { storage } from '../storage';
import { initialFormData, inputFields } from '../constant/medalForm';
import { validator } from '../validator';

// const initialValidState= {
//   country: true,
//   gold: true,
//   silver: true,
//   bronze: true,
// };

function MedalForm({ medalRecordList, setMedalRecordList }) {
  const [formData, setFormData] = useState(initialFormData);
  // const [isValid, setIsValid] = useState(initialValidState)

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate(formData)) return alert('입력 데이터를 확인해주세요.');
    const newMedalRecord = medalRecord(formData);
    if (medalRecordList.find((medalRecord) => medalRecord.country === newMedalRecord.country)) {
      return alert('이미 등록된 국가입니다.');
    }
    setMedalRecordList([...medalRecordList, newMedalRecord]);
    storage.add(newMedalRecord);
    setFormData(initialFormData);
  };

  const onUpdate = () => {
    const toUpdate = medalRecord(formData);
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

  const medalRecord = (data) => {
    const record = { ...data };
    const medalNames = ['gold', 'silver', 'bronze'];
    medalNames.forEach((medalName) => (record[medalName] = record[medalName] || '0'));
    record.sumOfMedals = medalNames.reduce((acc, medalName) => acc + Number(record[medalName]), 0);
    record.id = new Date().getTime();
    return record;
  };

  const validate = (formData) => {
    const { notEmpty, onlyNum, validate, isValid } = validator;
    const validations = {
      country: [notEmpty],
      gold: [onlyNum],
      silver: [onlyNum],
      bronze: [onlyNum],
    };
    const result = validate(formData, validations);
    // setIsValid(result);
    return isValid(result);
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
      <Button className="btn btn_large btn_yellow" value="추가 하기" type="submit" />
      <Button className="btn btn_large btn_yellow" value="업데이트" type="button" onClick={onUpdate} />
    </form>
  );
}

export default MedalForm;
