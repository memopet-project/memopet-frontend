import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Div = styled.div`
  color: red;
`;

export default function Home() {
  return (
    <>
      <div
        css={css`
          color: green;
        `}
      >
        div01
      </div>
      <Div>div02</Div>
    </>
  );
}
