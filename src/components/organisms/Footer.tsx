import { css } from '@emotion/react';
import Link from 'next/link';

const styles = {
  footer: css`
    height: 96px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  container: css`
    width: 100%;
    max-width: 1160px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
      padding: 2rem 20px;
      height: auto;
      align-items: start;
    }
  `,
  list: css`
    list-style: none;
    padding: 0;
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
  `,
  listItem: css`
    font-size: 14px;
    color: var(--grey-500);
  `,
  listItemText: css`
    white-space: nowrap;
    color: var(--grey-500);
  `,
  divide: css`
    display: inline-block;
    height: 1rem;
    border-right: 1px solid var(--grey-300);
  `,
  copyright: css`
    font-size: 14px;
    color: var(--grey-500);
  `,
};

const Footer = () => {
  return (
    <footer css={styles.footer}>
      <div css={styles.container}>
        <ul css={styles.list}>
          <li css={styles.listItem}>
            <Link css={styles.listItemText} href='#'>
              이용약관
            </Link>
          </li>
          <li css={styles.divide} />
          <li css={styles.listItem}>
            <Link css={styles.listItemText} href='#'>
              개인정보 처리방침
            </Link>
          </li>
          <li css={styles.divide} />
          <li css={styles.listItem}>
            <span css={styles.listItemText}>고객문의&nbsp;</span>
            <Link
              css={css`
                color: var(--main-red-500);
              `}
              href={'mailto:help@memopet.co.kr'}
            >
              help@memopet.co.kr
            </Link>
          </li>
        </ul>
        <span css={styles.copyright}>
          &copy; 2024 memopet. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
