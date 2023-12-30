import { useEffect, useState } from "react"

import FlowerSVG from '@/public/svg/flowerEmpty.svg'
import CommentSVG from '@/public/svg/comment.svg'
import VerticalDotsSVG from '@/public/svg/verticalDots.svg'
import ShareSVG from '@/public/svg/share.svg'
import PhotoArea from "../memory/photoArea"
import { commentInfoType, userInfoType } from "@/app/interfaces"
import ArticleCommentEach from "../memory/articleCommentEach"
import ArticleInput from "../memory/articleInput"

const Article = () => {
  const [commentOn, setCommentOn] = useState(false)
  const [modalOn, setModalOn] = useState(false)
  const [clickedID, setClickedID] = useState(-1)
  const tempContent = `어제 복실이랑 또아 인증샷을 찍는데 끼어든 '입만 웃는 그놈', 그리고 끝까지 카메라에 나오려고 애쓰는 짱플루언서...

  "그 애는 항상 웃고 있었어요. 근데 눈은 웃질 않았죠... 기묘한 아이였어요..."`

  const tempHashtag = [
    '웰시코기', '산책왕', '강아지모델', '모델본능', '짱플루언서', '갱얼쥐'
  ]

  const tempPhotos = [
    'https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J', 
    'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-530330473.jpg?crop=0.659xw:0.990xh;0.123xw,0.00779xh&resize=980:*', 
    'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg',
    'https://image.van-go.co.kr/place_main/2022/04/04/12217/035e1737735049018a2ed2964dda596c_750S.jpg',
  ]

  const tempCommentInfo:commentInfoType[] = [
    {'id': 0, 'commentor': '콜리', 'comment': '안녕 코코야 ^_^', 'imgUrl': 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'},
    {'id': 1, 'commentor': '소금이', 'comment': '안녕 코코야 :)', 'imgUrl': 'https://image.van-go.co.kr/place_main/2022/04/04/12217/035e1737735049018a2ed2964dda596c_750S.jpg'},
    {'id': 2, 'commentor': '몽구', 'comment': '저희 강아지도 올해 봄에 강아지별로 떠나갔어요. 마음 잘 추스리시길 바랍니다.. 위로의 말씀 전해요...', 'imgUrl': 'data:image/webp;base64,UklGRl4EAABXRUJQVlA4IFIEAADQHgCdASqAAIAAPt1kqE2opiQpLBVcMSAbiWVtXzA7gcs5Ah8wVkkZSNjF5fxEMWyBhF597M/HeHcZrsf1fvmg0/FZWlP5mvFmB8atMJqYjI751G/PfdRB9Br4obRKeKaYB1nOZO3/IuTINOXSpyXlOxIGThDwAx8NyznrhgMZ9sCfA7og7dtUjSMiz1xG0cdyKAF9IJj3cW3N8jD12/P2dZnvU6xoxiXM+Q1GyaGRObRgDqWWJjyFQsHp8dIKHdAPr5K9v5600mDP2DT/qZpFzA3uIhy3QZWFXITAI7+7Tc7S8oQRUX5hE3JrmmJOfCdQA9H56Dw4+asy2aMKs4AA5vAxQ2/lhQEHeuHfK7uO18SoGPayrk2TjQFN2/gZdP9oMlaKYpvU6G23lI7SGmdFGzbvEYT+2CkTh3bMRZwHtTFi6bb8YiJsrcVt6FtLO6Yuh9c9Z5jAv4YXhbusmbcwJslo+3WEkGzESSCRD/eTs5vRjeKs1KF+xMUil3jdRFmbaJX+/qiJBILSrbGQdSHVPceUuTRHNwAzZQYx2ehxUvIimU5ZunIFPnuTEn/PfJNu4rMXigMelBae3OOFN8E+VlW/RRAZ0HMcLD1U/yzVTysjoSnKoru34fYlXjFl4B7pMC51WedfqecYZnd4Vk5oj6v+Ao8QcgjWQ2sc5CwttODA285cm1jGkrT3CDXdIYi7bdbf6m+Yhx7iIWLRQZc/9ipEKjE8NXgwMAnk1DYvPzM7qSw5TjU1Zt/BwMfR7uvcI9cEmDnTZYmSi0xJREGXzrHONQC2x2TEY23pNeZzZpMXagVV493paQAmNTmSekUf2nxS+YdVMhMxWE5+0qrZfZ5awcx0SraTip0j3A0N27AiCxOynZ7X9C+XPoTaYQpxaZ36tZ0r1Ta1e4LeHBnBjDAbpSeyea9Cwvzg9aBl5mBCUrVw3unLR2cKZV8kdKeJTYhHQzA3f68jbtcwQ8oa1I5t3uy70I9lcLVzBTWYqQAkwZQiTK/X42Wt339mwe5Lntz2op0HCtGztTAv07v6JOq75Af99Mr89Ss44+qes7Pfw0GIKO/Aw5NTQ5gJq/7D6Xu8HlMrp5kjKpZYcwdb4KqOrnXsAMPfbdqTN934WRkR5jBIUsprUOQGNcFloEtuY5XflGilKPxjhZ4bEdBaw7+RvycB5AHSrTqDU0IsE7HzUzJq7hoB3CtaHin9XCsUA2Br9cucI5HbaBxxsTsBNp9hjbFKjPHVdxeWCjTEwud9AozlEmGJoPuIijs6U5rGUzgqfVXrsNOYn6tTK+IDgLibr4bBkxx+GgqdykEZSMrDX1q/rJS/iavpDpp8B/s3IxpVEW7x1IJGLWzwmWCqW3bhSO72Y/hGzegh6FVSi33ImO7nqHSD7BMtlQHbnuXhBJ/7RJyqfJHqrROqJvkquu/tTeUUWZQ4xgnMrARtpMQkjHmLxYwQEPRiCPHmQAAAAA=='},
    {'id': 3, 'commentor': '코코', 'comment': '나랑 같은 이름이구나!', 'imgUrl': 'https://media.4-paws.org/5/b/8/b/5b8bca3f74342210ccca652c651f2d7e23288753/VIER%20PFOTEN_2019-12-13_209-2890x2000.jpg'},
    {'id': 4, 'commentor': '후니', 'comment': '코코야 그곳에서 행복하렴!', 'imgUrl': 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'},
    {'id': 5, 'commentor': '모래', 'comment': '우리 모래도 코코랑 꼭 닮은 왤시코기였는데,, 코코 사진 보면서 많이 생각나네요...', 'imgUrl': 'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg'},
    {'id': 8, 'commentor': '짜롱이', 'comment': '우와 사진 진짜 잘나왔네요~~ 견주님 사진실력 대박', 'imgUrl': 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'},
  ]

  const tempUserInfo:userInfoType = {
    id:13,
    nickname: '엘시코기',
    profileImg: 'https://i.namu.wiki/i/ZKrxZgIrVcerqhyp9hTZt_e4Hr6FlIlXOLuuLQcXVw-Sn9VKo9yOqbxcJzKLjxvejcan_nEEV0iC1UKB9JJ85A.webp'
  }

  const [commentInfo, setCommentInfo] = useState<commentInfoType[]>(tempCommentInfo)
  const addComment = (newComment:commentInfoType) => {
    setCommentInfo([...commentInfo, newComment])
  }
  const handleModalChange = (id:number) => {
    setModalOn(()=>!modalOn)
    setClickedID(id)
  }

  const clickComment = () => {
    if(modalOn===true){setModalOn(false)}
    setCommentOn(!commentOn)
  }

  const deleteComment = () => {
    let tempCommentInfo = [...commentInfo].filter(comment => comment.id !== clickedID)
    setCommentInfo(tempCommentInfo)
  }

  return (
    <div className="bg-white flex p-5 gap-6 w-[864px] items-end">
      <PhotoArea photos={tempPhotos}/>
      <div className="">
        <header className="py-4 flex flex-col ">
          <div className="text-[13px] text-gray05 mb-1">2023. 11. 29</div>
          <div className="text-lg font-bold">입만 웃는 기묘한 뇨속..</div>
        </header>
        <div className={`transition-all duration-300 overflow-hidden ${commentOn ? 'max-h-0' : 'max-h-[400px]' }`}>
          <div className="whitespace-pre-wrap text-base leading-normal">{tempContent}</div>
          <div className="flex flex-wrap gap-1 mt-4 pb-2 border-b-gray02 border-solid">
            {
              tempHashtag.map((tag,i)=>{
                return (
                  <div className="py-[2px] px-3 flex items-center justify-center text-gray05 bg-gray01 rounded-full" key={i}>{'#' + tag}</div>
                )
              })
            }
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray02" />
        <div className="flex justify-between items-center w-full h-10">
          <div className="flex">
            <FlowerSVG className='w-10 '/>
            {commentOn ? <CommentSVG className='w-10 stroke-red05  cursor-pointer' onClick={clickComment} /> : <CommentSVG className='w-10  stroke-gray09 cursor-pointer' onClick={clickComment} />}
            <ShareSVG className='w-10' />
          </div>
          <div className="mr-3 flex justify-center items-center cursor-pointer opacity-50"><VerticalDotsSVG /></div>
        </div>
        <div className={`rounded-md transition-all duration-300 overflow-hidden relative ${commentOn ? 'h-[500px]' : 'h-0' }`}>
          <div className="bg-grayBlur px-3 h-[370px] overflow-scroll mb-2">
            <div className="sticky -top-3 w-full h-6" style={{background: 'linear-gradient(0deg, rgba(250, 250, 250, 0.00) 0%, #FAFAFA 100%)'}}/>
            {
              commentInfo.map((item)=>{
                return (
                  <div key={item.id}>
                    <ArticleCommentEach 
                      commentInfo={item}
                      deleteComment={deleteComment}
                      status={item.commentor === tempUserInfo.nickname ? '내글' : '로그인'}  
                      isSelected={item.id===clickedID && modalOn}
                      clickDots={handleModalChange}
                    />
                  </div>
                )
              })
            }
            <div className="sticky -bottom-3 w-full h-6" style={{background: 'linear-gradient(180deg, rgba(250, 250, 250, 0.00) 0%, #FAFAFA 100%)'}} />
          </div>
          <ArticleInput userInfo={tempUserInfo} addComment={(newComment)=>addComment(newComment)}/>
        </div>
      </div>
    </div>
  )
}

export default Article