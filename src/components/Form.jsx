import LabeledInput from './LabeledInput';
import Button from './Button';

function Form() {
  return (
    <form className="header__form">
      <LabeledInput id="country" label="국가" holder="국가 이름" />
      <LabeledInput id="gold" label="금메달" holder="금메달 개수" />
      <LabeledInput id="silver" label="은메달" holder="은메달 개수" />
      <LabeledInput id="bronze" label="동메달" holder="동메달 개수" />
      <Button value="추가 하기" type="submit" />
      <Button value="업데이트" />
    </form>
  );
}

export default Form;
