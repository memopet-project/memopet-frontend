import { SerializedStyles, css } from '@emotion/react';

type Types =
  | 'primaryPresent'
  | 'greyPresent'
  | 'primaryAfter'
  | 'greyAfter'
  | 'primaryBefore'
  | 'greyBefore';

interface IProgressIndicatorDotProps {
  type: Types;
  top?: string;
  right?: string;
  isMobile?: boolean;
  cssStyle?: ReturnType<typeof css>;
}

const styles: { [key in Types]: SerializedStyles } = {
  primaryPresent: css`
    background: var(--main-red-500);
  `,
  greyPresent: css`
    background: var(--grey-500);
  `,
  primaryAfter: css`
    background: var(--main-red-300);
  `,
  greyAfter: css`
    background: var(--grey-300);
  `,
  primaryBefore: css`
    background: var(--grey-300);
  `,
  greyBefore: css`
    background: var(--grey-100);
  `,
};

export default function ProgressIndicatorDot({
  type = 'primaryPresent',
  top = '0px',
  right = '0px',
  isMobile = false,
  cssStyle
}: IProgressIndicatorDotProps) {
  return (
    <div
      css={css([
        css`
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: absolute;
          top: ${top};
          right: ${right};
        `,
        isMobile &&
          css`
            width: 6px;
            height: 6px;
          `,
        styles[type],
        cssStyle
      ])}
    />
  );
}
