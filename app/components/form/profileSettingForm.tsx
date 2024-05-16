'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import DefaultInput from '@/app/atom/defaultInput';

const ProfileSettingForm = () => {
  const [val, setVal] = useState('');
  return (
    <div className="bg-white border border-[#17171710] w-[520px] form-shadow rounded-2xl relative px-20">
      <Image
        src="/images/clip.svg"
        alt="clip"
        width={136}
        height={48}
        className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2/3"
      />
      <h2 className="font-bold text-2xl inline-block mt-16">반려동물의 이름과 종류를 알려주세요</h2>
      <DefaultInput
        placeholder="반려동물의 이름을 입력해주세요"
        type="text"
        value={val}
        name="petName"
        onChange={(value) => setVal(value)}
      />
    </div>
  );
};

export default ProfileSettingForm;
