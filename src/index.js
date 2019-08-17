import React from 'react';
import InnerItem from './InnerItem'
import NaviBtn from './NaviBtn'

import PropTypes from 'prop-types';
import './css/Timeline.css'



class CarouselTimeline extends React.Component {
  constructor(props) {
    super(props);
    this.tlDiv = React.createRef();
    this.inDiv = React.createRef();

    this.state = {
      contents: this.props.data
      , idx: 0
    }
    
    this.config = this.props.config;

    this.mouseState = {
      isClick: false
      , startX: 0
      , nowX: 0
    }
    this.slideState = {
      currentX: 0
      , idx: 0
      , maxSlide: this.state.contents.length
    }

    this.handleEvent = this.handleEvent.bind(this);

    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.handleOnLeftBtn = this.handleOnLeftBtn.bind(this);
    this.handleOnRightBtn = this.handleOnRightBtn.bind(this);
  }



  componentWillUnmount() {
    console.log("componentWillUnmount");
    if(this.config.eventConfig.key) document.removeEventListener('keydown', this.handleKeyPress, false);
  }

  componentDidMount() {
    console.log("componentDidMount");
    if(this.config.eventConfig.key) document.addEventListener('keydown', this.handleKeyPress, false);

    this.slideState.currentX = this.inDiv.current.offsetWidth / 2 - this.config.fstItemWidth / 2;
    this.tlDiv.current.style.transform = "translateX(" + this.slideState.currentX + "px)";
    let idx = this.props.startIdx-1;
    if(idx > this.slideState.maxSlide) idx = this.slideState.maxSlide-1;
    while(idx--) this.handleOnRightBtn();
  }

  handleEvent(e) {
    switch (e.type) {
      case 'mousedown':
      case 'touchstart': {
        this.mouseState.isClick = true;
        this.mouseState.startX = (e.type === 'mousedown' ? e.clientX : (e.type === 'touchstart' ? e.touches[0].clientX : 0));
        e.type === 'mousedown' && e.preventDefault();
        break;
      }
      case 'touchmove':
      case 'mousemove': {
        if (this.mouseState.isClick) this.mouseState.nowX = (e.type === 'mousemove' ? e.clientX : (e.type === 'touchmove' ? e.touches[0].clientX : 0));
        break;
      }
      case 'touchend':
      case 'mouseup': {
        this.mouseState.nowX > this.mouseState.startX ? this.handleOnLeftBtn() : this.handleOnRightBtn();
        this.mouseState.isClick = false;
        break;
      }
      case 'mouseover':
      case 'touchout': {
        this.mouseState.isClick = false;
        break;
      }
      default: {
        break;
      }
    }
  }

  handleOnRightBtn() {
    if (this.state.idx < this.slideState.maxSlide - 1) {
      this.setState((prevState) => ({
        idx: prevState.idx + 1
      }));
      this.slideState.idx++;
      this.moveTimeline(-1);
    }
  }
  handleOnLeftBtn() {
    if (this.state.idx > 0) {
      this.setState((prevState) => ({
        idx: prevState.idx - 1
      }));
      this.slideState.idx--;
      this.moveTimeline(1);
    }
  }

  handleKeyPress(e) {
    if (e.key === "ArrowRight") {
      this.handleOnRightBtn();
    } else if (e.key === "ArrowLeft") {
      this.handleOnLeftBtn();
    } else {
      return;
    }
  }

  moveTimeline(direction) {
    this.slideState.currentX += direction * (this.config.anotherItemWidth+50);
    this.tlDiv.current.style.transform = "translateX(" + this.slideState.currentX + "px)";
  }

  render() {
    const { contents } = this.state;
    const cList = contents.map(
      (content, i) => (
        <InnerItem key={i} item={content} order={i} config={this.config} idx={this.state.idx}/>
      )
    );
    const naviBtn = <NaviBtn idx={this.state.idx} slideState={this.slideState} e={{ left: this.handleOnLeftBtn, right: this.handleOnRightBtn }} config={this.config.naviConfig} />;
    const isMouse = this.config.eventConfig.mouse;
    const isTouch = this.config.eventConfig.touch;
    return (
      <React.Fragment>
        {this.config.naviConfig.position === 'outer-top' && naviBtn}
        <div className="outBox"  >
          <div className="innerBox" style={{height : this.config.containerHeight+"px"}} ref={this.inDiv}>
            {this.config.naviConfig.position === 'inner-top' && naviBtn}
            <div className="cardAll" ref={this.tlDiv}
              style={{height : this.config.itemHeight+"%"}}
              onMouseDown={isMouse && (e => this.handleEvent(e))}
              onMouseMove={isMouse && (e => this.handleEvent(e))}
              onMouseUp={isMouse && (e => this.handleEvent(e))}
              onMouseOut={isMouse && (e => this.handleEvent(e))}

              onTouchStart={isTouch && (e => this.handleEvent(e))}
              onTouchMove={isTouch && (e => this.handleEvent(e))}
              onTouchEnd={isTouch && (e => this.handleEvent(e))}
            >
              {cList}
            </div>
            {this.config.naviConfig.position === 'inner-bottom' && naviBtn}
          </div>
        </div>
        {this.config.naviConfig.position === 'outer-bottom' && naviBtn}
      </React.Fragment>
    );
  }
};

CarouselTimeline.defaultProps = {
  data: [
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
      mediaType: "video"
      , mediaSrc: "http://techslides.com/demos/sample-videos/small.mp4"
      , profile: {
        profileImgSrc: ""
        , profileName: ""
      }
      , boardContent: {
        textSrc: ""
      }
    }
  ],
  config: {
    containerHeight : 400 //400px;
    ,itemHeight : 90 // 90%
    ,fstItemWidth : 700
    , anotherItemWidth: 400
    , contentType: 'timeline-feed' // ['timeline-feed', 'Media', 'image', 'video']
    , eventConfig : {
      mouse : true
      ,touch : true //for Mobile
      ,key : true
    }
    ,naviConfig : {
      button: true // [true, false]
      , paging : true
      , position: 'outer-bottom' // [inner-top, inner-bottom, outer-top, outer-bottom]
      , both : false
    }
  },
  startIdx : 1
};

CarouselTimeline.propTypes = {
  data: PropTypes.shape({
    mediaType: PropTypes.oneOfType([
      PropTypes.string.isRequired
      , PropTypes.oneOf(['media', 'video'])
    ]).isRequired
    , mediaSrc: PropTypes.string.isRequired
    , profile: PropTypes.shape({
      profileImgSrc: PropTypes.string
      , profileName: PropTypes.string
    }).isRequired
    , boardContent: PropTypes.shape({
      textSrc: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

export default CarouselTimeline;