import RoundButton from '@/components/atoms/buttons/RoundButton';
import { css } from '@emotion/react';
import { ChangeEvent, useState } from 'react';

interface IProps {
  placeHolder?: string;
}

const InputComment = ({ placeHolder }: IProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClickCancelButton = () => {
    setInputValue('');
  };
  const handleClickSubmitButton = () => {};

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 8px;
      `}
    >
      <input
        placeholder={placeHolder}
        value={inputValue}
        onChange={handleChangeInputValue}
      />
      <div
        css={css`
          display: flex;
          justify-content: end;
          gap: 4px;
        `}
      >
        <RoundButton type='outline'>취소</RoundButton>
        <RoundButton type='filled' disabled={!inputValue}>
          등록
        </RoundButton>
      </div>
    </div>
  );
};

export default InputComment;
