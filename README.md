# react-timeline-carousel
---

UI Component in the SNS form of Timeline Feed Slider for Developer with REACT

리액트를 사용하는 개발자 분들에게 제공하는 SNS 타임라인 피드 형태의 UI 컴포넌트 입니다.

[![npm version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: https://badge.fury.io/js/rc-timeline-carousel.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-timeline-carousel
[download-image]: https://img.shields.io/badge/download-github-brightgreen
[download-url]: https://www.npmjs.com/package/rc-timeline-carousel

## Screenshots - "화면갈무리"이에요

제가 IU를 좋아해서..
팬입니다..

<img src="https://user-images.githubusercontent.com/45239851/63210554-e1a53a80-c12a-11e9-9126-84b9aabf9c53.JPG" width="600"/>

<img src="https://media.giphy.com/media/h5KkauDFxsGVcoWWuE/giphy.gif" width="600"/>

<img src="https://media.giphy.com/media/KGM9tCohNk3yImmNJm/giphy.gif" width="600"/>


##  Features - 브라우저 지원은 이렇습니다

* Supports IE9, IE10, Chrome, Firefox & Safari

## Install - 이렇게 설치하세요

```bash
npm install --save rc-timeline-carousel
```

It's sooooooooooo easy? isn't it?

간단합니다. 그렇죠?

## Usage - 이렇게 사용하세요

````js
import React from 'react';
import ReactDOM from 'react-dom';
import CarouselTimeline from 'rc-timeline-carousel'
import 'rc-timeline-carousel/src/css/Timeline.css'


ReactDOM.render(
    <CarouselTimeline />
, document.getElementById('root'));
`````

## Parameter

You can add a content or custumize a css design

이 캐러셀에다가 컨텐츠를 넣거나 css 디자인도 가능하답니다.

````js
...

let contents = [{...}];
let config = {...};
let startIdx = 0;

class YourComponent extends Component {
  render() {
    return (
        <CarouselTimeline data={contents} config={config} startIdx={startIdx}/>
    );
  }
}
`````




[Online demo](http://kimyongyook.github.io/)
네.. 아무것도 없습니다. 만들어야되거든요..

### data

````js
let contents = [
  {
    mediaType: "image/video" //[image,video]
    , mediaSrc: ""  //image or video url
    , profile: {
      profileImgSrc: "" //profile image url
      , profileName: "" //profile name
      , profileIntro: "" //profile Introduce Comment
    }
    , boardContent: {
      textSrc: "" //board Text Contents
    }
  }
]
`````

### config

````js
let config= {
  containerHeight : 400 //400px;
  ,itemHeight : 90 // 90%
  ,fstItemWidth : 700 //focus Item width 700(timelinefeed)
  , anotherItemWidth: 400 //unfocus Item width
  , contentType: 'timeline-feed' // ['timeline-feed', 'media-only', 'custom']
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
`````

### startIdx
````js
let startIdx = 1; //start idx 1
`````
## Development

use create-react-app

```
npm install create-react-app
create-react-app yourApp
npm start
```

## Example

`npm start` and then go to `http://localhost:3000/`


## License

`rc-timeline-carousel` is released under the MIT license.
