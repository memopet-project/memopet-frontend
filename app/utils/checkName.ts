/**
 * @param {string} name 
 * @returns {boolean}
 * @description 유효성 검사 체크 통과 X -> true
 */
const checkName = (name: string) => {
  const regex = new RegExp(/^[가-힣]+$/)
  return !regex.test(name)
}

export default checkName