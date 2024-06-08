'use client'

import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { css, keyframes, useTheme } from '@emotion/react';

type Props = {
  hasNextPage: boolean;
  fetchNextPage: () => void;
  isPending: boolean;
}

const Observer = ({hasNextPage, fetchNextPage, isPending}: Props) => {
  const theme = useTheme()

  const {setTarget} = useIntersectionObserver({
    threshold: 0.5,
    hasNextPage,
    fetchNextPage
  });

  return (
    <div
      css={css`
        min-height: 20px;
      `}
      ref={(node) => setTarget(node)}
    >
      {isPending &&
        <span
          css={css`
            width: 36px;
            height: 36px;
            border: 3px solid #99999999;
            border-bottom-color: #FF3D00;
            border-radius: 50%;
            display: inline-block;
            box-sizing: border-box;
            animation: ${keyframes`${theme.keyframes.rotation}`} 1s linear infinite;
          `}
        ></span>
      }
    </div>
  );
};

export default Observer;
