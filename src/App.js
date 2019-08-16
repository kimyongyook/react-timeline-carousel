import React, { Component } from 'react';
import CarouselTimeline from './CarouselTimeline'

let contents = [
  {
    mediaType: "image"
    , mediaSrc: "https://img1.yna.co.kr/etc/inner/KR/2019/07/13/AKR20190713045100005_01_i_P2.jpg"
    , profile: {
      profileImgSrc: "https://cdnimg.melon.co.kr/cm/artistcrop/images/002/61/143/261143_500.jpg?32b7688ac5eb168fa11891d572f7b23d/melon/resize/416/quality/80/optimize"
      , profileName: "IU"
      , profileIntro: "안녕하세요 이지금입니다"
    }
    , boardContent: {
      textSrc: "여러분 너무 반가워요~ \n저녁들 드셨나요 ㅜㅜ \n오늘 호텔델루나 본방사수!!"
    }
  },
  {
    mediaType: "image"
    , mediaSrc: "https://www.boannews.com/media/upFiles/001(348).jpg"
    , profile: {
      profileImgSrc: "http://2.bp.blogspot.com/-fjBhwhSMEp0/VSTL1rylRmI/AAAAAAAAkoQ/WLelllBrNyA/s1600/ba331ea4-8ce2-11e3-8b82-00144feab7de.jpg"
      , profileName: "Edward Snowden"
      , profileIntro: "Nice to meet you"
    }
    , boardContent: {
      textSrc: "Several countries, including Ireland, have spurned or delayed asylum requests from Edward Snowden, the former U.S. spy agency contractor wanted for leaking secrets, despite an appeal fr"
    }
  },
  {
    mediaType: "image"
    , mediaSrc: "http://www.bodonews.com/imgdata/bodonews_com/201907/2019070547475967.jpg"
    , profile: {
      profileImgSrc: "http://thumb.mt.co.kr/06/2018/12/2018121911112342191_1.jpg"
      , profileName: "신세경"
      , profileIntro: "Shin Sae kyeong / 진국이 사랑이 누나"
    }
    , boardContent: {
      textSrc: "내일도 구해령❣️"
    }
  },
  {
    mediaType: "video"
    , mediaSrc: "http://techslides.com/demos/sample-videos/small.mp4"
    , profile: {
      profileImgSrc: ""
      , profileName: ""
    }
    , boardContent: {
      textSrc: ""
    }
  },
]


let config= {
  containerHeight : 400 //400px;
  ,itemHeight : 90 // 90%
  ,fstItemWidth : 400 //focus Item width
  , anotherItemWidth: 400 //unfocus Item width
  , contentType: 'media-only' // ['timeline-feed', 'media-only', 'custom']
  , eventConfig : {
    mouse : true // for PC [true, false]
    ,touch : true // for Mobile [true, false]
    ,key : true // [true, false]
  }
  ,naviConfig : {
    button: true // [true, false]
    , paging : true //paging [true, false]
    , position: 'outer-bottom' // [inner-top, inner-bottom, outer-top, outer-bottom]
    , both : false // [true, false]
  }
}

let startIdx = 1 //start 1 limit contentSize

class App extends Component {
  render() {
    return (
        <CarouselTimeline data={contents} config={config} startIdx={startIdx}/>
    );
  }
}

export default App;