import { css } from '@emotion/react';
import MemoryThumbItem from '@/components/molecules/memory/MemoryThumbItem';
import CommentItem from '@/components/organisms/comment/CommentItem';
import CommentActionButton from '@/components/molecules/comment/CommentActionButton';
import Timeline from '@/components/atoms/dropdown/Timeline';
import Ticker from '@/components/atoms/dropdown/Ticker';
import UserItem from '@/components/organisms/history/UserItem';
import HistoryMemoryCommentItem from '@/components/organisms/history/HistoryMemoryCommentItem';
import HistoryCommentItem from '@/components/organisms/history/HistoryCommentItem';
import SearchMemoryItem from '@/components/organisms/search/SearchMemoryItem';
import HistorySquareTumnb from '@/components/molecules/history/HistorySquareThumb';

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
