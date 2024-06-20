import React from 'react';
import { css } from '@emotion/react';
import ThemedText from '@/components/atoms/ThemedText';
import InputDefaultItem from '@/components/atoms/input/InputDefaultItem';
import { useRecoilState } from 'recoil';
import { firstStep } from '@/recoil/store';
import { useDebounce } from '../../../hooks/useDebounce';
import InputSearchItem from '@/components/atoms/input/InputSearchItem';
import SearchResultsList from '@/components/molecules/SearchResultsList';

const ProfileSettingStep1 = () => {
  const [obj, setObj] = useRecoilState(firstStep);
  const { debouncedValue } = useDebounce({ value: obj.petName, delay: 500 });

  const setter = (str: string) => {
    setObj({
      ...obj,
      petName: str
    });
  }

  const validatePetName = (str: string) => {
    // 한글 또는 영문 validate
    if(str === '') return true;

    const reg = /^[가-힣a-zA-Z]+$/;

    console.log(reg.test(str));
    return reg.test(str);
  }

  return (
    <div css={css`
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 0 60px;
      gap: 2rem;
    `}>
      <div css={css`
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
      `}>
        <ThemedText type={'labelLarge'}>이름</ThemedText>
        <InputDefaultItem
          value={obj.petName}
          setValue={setter}
          errorMessage={'한글 또는 영문만 입력할 수 있어요.'}
          validate={validatePetName(debouncedValue)}
        />
      </div>
      <div>
        <ThemedText type={'labelLarge'}>품종</ThemedText>
        <SearchResultsList
          searchResults={['품종1', '품종2', '품종3']}
          value={obj.petSpecS}
          setValue={(str: string) => {
            setObj({
              ...obj,
              petSpecS: str
            });
          }}
          placeholder={'품종을 입력해주세요'}
          errorMessage={''}
          validate={true}
        />
        {/*<InputSearchItem*/}
        {/*  value={obj.petSpecS}*/}
        {/*  setValue={(str: string) => {*/}
        {/*    setObj({*/}
        {/*      ...obj,*/}
        {/*      petSpecS: str*/}
        {/*    });*/}
        {/*  }}*/}
        {/*  placeholder={'품종을 입력해주세요'}*/}
        {/*  errorMessage={''}*/}
        {/*  validate={true}*/}
        {/*/>*/}
      </div>
    </div>
  );
};

export default ProfileSettingStep1;
