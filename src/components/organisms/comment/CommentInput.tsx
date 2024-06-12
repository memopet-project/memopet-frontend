import { css, useTheme } from '@emotion/react';

const CommentInput = () => {
  const theme = useTheme();
  return (
    <div
      css={css`
        width: 360px;
        border-radius: 8px;
        border: 1px solid ${theme.colors.grey[700]};
        padding: 12px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        &:hover {
          box-shadow: 0px 4px 0px 0px #171717;
        }
      `}
    >
      <input placeholder='따뜻한 한마디를 남겨주세요' />
      <div
        css={css`
          display: flex;
          justify-content: end;
          gap: 4px;
        `}
      >
        <button>취소</button>
        <button>남기기</button>
      </div>
    </div>
  );
};

export default CommentInput;
