/**
 * 
 * @param {string} value 
 * @returns {boolean} 유효성 검사 체크 통과 X -> true
 */

const checkContactNumber = (value: string): boolean => {
  const contactRegex = new RegExp(/^[0-9]{1,11}$/)
  
  return !contactRegex.test(value)
}

export default checkContactNumber