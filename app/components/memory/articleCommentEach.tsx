import VerticalDotsSVG from '@/public/svg/verticalDots.svg'
// import CommentAction from '../comment/action';
import { commentInfoType } from '@/app/interfaces';

interface CommentEach {
  commentInfo: commentInfoType
  status: '로그아웃' | '로그인' | '내글',
  isSelected: boolean,
  deleteComment?: ()=>void,
  clickDots: (id:number)=>void,
}

const ArticleCommentEach = ({
  commentInfo,
  status,
  isSelected,
  deleteComment,
  clickDots,
}:CommentEach) => {

  return (
    <div className="flex justify-around pb-4 ">
      <div className="rounded-full min-w-[32px] h-8 mr-2 bg-contain" style={{backgroundImage: `url(${commentInfo.imgUrl})`}} />
      <div className="w-full flex flex-col">
        <div className="flex items-center">
          <div className="text-sm font-semibold mr-2">{commentInfo.commentor}</div>
          <div className="text-xs text-gray05">3분전</div>
        </div>
        <div className="text-gray09 font-normal text-sm">{commentInfo.comment}</div>
      </div>
      <div className="flex items-center justify-center cursor-pointer rounded-full relative h-10 min-w-[40px] hover:bg-gray0.5" onClick={()=>clickDots(commentInfo.id)}>
        <VerticalDotsSVG />
        {
          isSelected && <div className='absolute right-2 top-10 bg-grayBlur z-10'>
{/*             <CommentAction status={status} deleteComment={deleteComment}/> */}
          </div>
        }
      </div>
    </div>
  )
}

export default ArticleCommentEach
