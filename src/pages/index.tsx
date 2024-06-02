import common from '@/styles/common';
import { css } from '@emotion/react';
import fetcher from '@/utils/fetchWrapper';

export const getServerSideProps = async () => {

  const res = await fetcher('/todos/1');

  return {
    props: {
      data: res,
    },
  };
}

export default function Home({ data }) {

  console.log('data', data);

  return (
    <div
      css={css`
        color: ${common.colors.primary[600]};
      `}
    >
      main page
    </div>
  );
}
