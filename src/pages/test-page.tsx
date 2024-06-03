'use client';

import React from 'react';
import PropTypes from 'prop-types';
import fetchWrapper from '@/utils/fetchWrapper';

export const getServerSideProps = async () => {
  const res = await fetchWrapper('/api/login');

  return {
    props: {
      data: res,
    },
  };

}

const TestPage = props => {
  const [response, setResponse] = React.useState(null);

  const fetch = async () => {
    try {
      const response = await fetchWrapper('/api/login', {
        method: 'POST',
        body: JSON.stringify({
          email: '',
          password: '',
        }),
      });
      console.log('response', response);
      setResponse(response);
    } catch (error) {
      console.error('Fetch Error:', error);
    }
  }

  return (
    <div>
      <button
        css={{
          color: 'red',
          backgroundColor: 'blue'
        }}
        onClick={() => {
          fetch();
        }}
      >Button</button>

      <div>
        {response && (
          <div>
            <div>{response.id}</div>
            <div>{response.title}</div>
            <div>{response.completed}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestPage;
