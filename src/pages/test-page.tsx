'use client';

import React from 'react';
import { convertUnit, copyToClipboard, validatePassword } from '@/utils/common';

export const getServerSideProps = async () => {

  return {
    props: {},
  };

};

const TestPage = () => {
  const email = 'asdflk@ansdf.cas';

  console.log(validatePassword(email));

  const test = async () => {
    await copyToClipboard('test');
  };

  const testNum = 12345;

  return (
    <div>
      <button
        css={{
          color: 'red',
          backgroundColor: 'blue',
        }}
        onClick={test}
      >Button
      </button>

      <span>{convertUnit(testNum, 1, 'en')}</span>
    </div>
  );
};

export default TestPage;
