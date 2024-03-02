/**
 * 
 * @param {string} value 
 * @returns {boolean} 유효성 검사 체크 통과 X -> true
 */
const checkEmailType = (value: string): boolean => {
  const emailRegex = new RegExp( /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i)
  return !emailRegex.test(value)
}

export default checkEmailType