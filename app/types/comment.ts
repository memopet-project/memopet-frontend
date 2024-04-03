export interface commentActionStatus {
  status: "로그아웃" | "로그인" | "내글";
}
export interface commentInfoType {
  id: number;
  commentor: string;
  comment: string;
  imgUrl?: string;
}
