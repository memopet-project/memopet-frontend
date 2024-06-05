'use client';

import React from 'react';
import { convertUnit, copyToClipboard, validatePassword } from '@/utils/common';
import Footer from '@/components/organisms/Footer';

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
    <>
      <div>
        <h1>Test Page</h1>
        <button onClick={test}>Copy</button>
        <div>{convertUnit(testNum)}</div>
      </div>
      <Footer />
    </>
  );
};

export default TestPage;
