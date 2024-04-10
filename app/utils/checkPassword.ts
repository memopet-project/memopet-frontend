/**
 * @param {string} password 
 * @returns {boolean}
 * @description 유효성 검사 체크 통과 X -> true
 */
const checkPassword = (password: string) => {
  const regex = new RegExp(/^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/)

  return !regex.test(password)
}

export default checkPassword