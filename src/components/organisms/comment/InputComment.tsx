import { css } from '@emotion/react';

interface IProps {
  placeHolder?: string;
}

const InputComment = ({ placeHolder }: IProps) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 8px;
      `}
    >
      <input placeholder={placeHolder} />
      <div
        css={css`
          display: flex;
          justify-content: end;
          gap: 4px;
        `}
      >
        <button>취소</button>
        <button>등록</button>
      </div>
    </div>
  );
};

export default InputComment;
