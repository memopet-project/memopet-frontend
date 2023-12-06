export interface ResponseData {
  success?: boolean
  data?: any
  error?: string
  message?: string
}

export interface commentInfoType {
  commentor: string,
  comment: string
}

export interface commentActionStatus {
  status : '로그아웃' | '로그인' | '내글'
}

export interface buttonProps {
  text: string
  bgColor: "white" | "gray" | "red"
  marginRight?: boolean
  onClick?: ()=>void
}