import { css } from '@emotion/react';
import MemoryThumbItem from '@/components/molecules/memory/MemoryThumbItem';
import CommentItem from '@/components/organisms/comment/CommentItem';
import CommentActionButton from '@/components/molecules/comment/CommentActionButton';
import Timeline from '@/components/atoms/dropdown/Timeline';
import Ticker from '@/components/atoms/dropdown/Ticker';

export default function Home() {
  return (
    <div
      css={css`
        color: var(--main-red-800);
      `}
    >
      main page
    </div>
  );
}
