import ArrowDropdownIcon from '@/assets/icon/ArrowDropdownIcon';
import ArrowDropdownUpIcon from '@/assets/icon/ArrowDropdownUpIcon';
import { css } from '@emotion/react';
import { type Dispatch, type SetStateAction, useState } from 'react';

interface IDropDownProps {
  data: Array<string>;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  placeholder: string;
}

const DropDown: React.FC<IDropDownProps> = ({
  data,
  selected,
  setSelected,
  placeholder,
}) => {
  const [toggle, setToggle] = useState(false);

  function select(v: string) {
    setSelected(v);
  }
  function click() {
    setToggle((prev) => !prev);
  }

  return (
    <div
      onClick={click}
      css={css`
        position: relative;
      `}
    >
      <div
        css={css`
          width: 100%;
          height: 52px;
          border: 1px solid
            ${toggle ? 'var(--main-red-500)' : 'var(--grey-700)'};
          border-radius: 6px;
          padding: 14px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--grey-0);
        `}
      >
        <span
          css={css`
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: -0.5px;
            color: ${selected ? 'var(--grey-900)' : 'var(--grey-400)'};
          `}
        >
          {selected || placeholder}
        </span>
        {toggle ? (
          <ArrowDropdownUpIcon color='var(--main-red-500)' />
        ) : (
          <ArrowDropdownIcon color='var(--grey-900)' />
        )}
      </div>
      {toggle && (
        <div
          css={css`
            width: 100%;
            max-height: 160px;
            border: 1px solid var(--main-red-500);
            border-radius: 6px;
            padding: 6px 0px;
            background: var(--grey-0);
            overflow-y: scroll;
            margin-top: 4px;
            position: absolute;
            top: 100%;
            left: 0;
            z-index: 1;
          `}
        >
          <ul>
            {data.map((v, i) => (
              <li
                onClick={() => select(v)}
                key={i}
                css={css`
                  font-size: 1rem;
                  font-weight: 400;
                  line-height: 24px;
                  letter-spacing: -0.5px;
                  padding: 8px 12px;
                  color: ${selected === v
                    ? 'var(--main-red-500)'
                    : 'var(--grey-900)'};
                  &:hover {
                    color: var(--main-red-500);
                  }
                `}
              >
                {v}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
