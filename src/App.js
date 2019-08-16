import React, { Component } from 'react';
import CarouselTimeline from './CarouselTimeline'

let contents = [
  {
    mediaType: "image"
    ,mediaSrc: "http://www.bodonews.com/imgdata/bodonews_com/201907/2019070547475967.jpg"
    ,profile:{
      profileImgSrc : "http://thumb.mt.co.kr/06/2018/12/2018121911112342191_1.jpg"
      ,profileName :"신세경"
      ,profileIntro :"Shin Sae kyeong / 진국이 사랑이 누나"
    }
    ,boardContent:{
      textSrc : "내일도 구해령❣️"
    }
  },
  {
    mediaType: "video"
    ,mediaSrc: "http://techslides.com/demos/sample-videos/small.mp4"
    ,profile:{
      profileImgSrc : ""
      ,profileName :""
    }
    ,boardContent:{
      textSrc : ""
    }
  },
]

let itemType = "timeline";

class App extends Component {
  render() {
    return (
        <CarouselTimeline type={itemType}/>
    );
  }
}

export default App;