export const validateEmail = (email: string): boolean => {
  // .com, .co.kr, .org, .net 으로 끝나는 도메인
  const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|co\.kr|org|net)$/;

  return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
  // 8자 이상, 영문, 숫자, 특수문자 포함
  const passwordRegex: RegExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+|<>?]).{8,}$/;

  return passwordRegex.test(password);
};


/**
 * @description 객체를 깊은 복사합니다.
 * @param arg 복사할 객체
 * @returns 복사된 객체
 *
 * @example const copiedObject = generateDeepCopiedObject(originalObject);
 */
export const generateDeepCopiedObject = <T extends {}>(arg: T): T => {
  if (window.structuredClone) {
    return window.structuredClone(arg);
  }
  // 객체를 깊은 복사 합니다.
  return JSON.parse(JSON.stringify(arg));
}


/**
 * @description 클립보드에 텍스트를 복사합니다.
 * @param text
 *
 * @example copyToClipboard('test');
 */
export const copyToClipboard = async (text: string): Promise<void> => {
  if(navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  }

  copyToClipboardFallback(text);
}

const copyToClipboardFallback = (text: string): void => {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
}


/**
 * @description 숫자를 소숫점 + 한글표기로 변경.
 *
 * @param num 숫자
 * @param digits 소숫점 자리수
 * @param localization 한글 표기
 * @returns {string}
 *
 * @example convertUnit(213500) // 21.3만
 */

type TLocalization = 'kr' | 'en';

export function convertUnit(num: number, digits: number = 1, localization: TLocalization = 'kr'): string {
  const unitsKR = ['', '만', '억', '조', '경', '해'];
  const unitsEN = ['', 'K', 'M', 'B', 'T', 'Q'];

  let unitIndex = 0;
  let convertedNum = num;

  // convertedNum 을 버림 처리하면서 unitIndex 를 증가시킵니다.
  while (convertedNum >= 10000) {
    if (localization === 'kr') {
      convertedNum /= 10000;
    } else {
      convertedNum /= 1000;
    }
    unitIndex++;
  }

  // 소숫점 자리수 만큼 버림 처리
  const factor = Math.pow(10, digits);
  convertedNum = Math.floor(convertedNum * factor) / factor;

  if (convertedNum % 1 === 0) {
    digits = 0;
  }

  const unit = localization === 'kr' ? unitsKR : unitsEN;

  return `${convertedNum.toFixed(digits)}${unit[unitIndex]}`;
}
