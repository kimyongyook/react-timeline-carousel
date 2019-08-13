import React from 'react';
import InnerItem from './InnerItem'
import PropTypes from 'prop-types';
import './Timeline.css'


class CarouselTimeline extends React.Component {
  constructor(props) {
    super(props);
    this.tlDiv = React.createRef();
    this.inDiv = React.createRef();
    this.itemDiv = [];

    this.state = {
      contents: this.props.data
      , idx: 0
    }
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

    this.config = {
      fstItemWidth : 700
      ,anotherItemWidth : 400
    }

    this.handleEvent = this.handleEvent.bind(this);

    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.handleOnLeftBtn = this.handleOnLeftBtn.bind(this);
    this.handleOnRightBtn = this.handleOnRightBtn.bind(this);
  }



  componentWillUnmount() {
    console.log("componentWillUnmount");
    document.removeEventListener('keydown', this.handleKeyPress, false);
  }

  componentDidMount() {
    console.log("componentDidMount");
    document.addEventListener('keydown', this.handleKeyPress, false);

    this.slideState.currentX = this.inDiv.current.offsetWidth / 2 - this.config.fstItemWidth / 2;
    this.tlDiv.current.style.transform = "translateX(" + this.slideState.currentX + "px)";
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
        <InnerItem ref={r => this.itemDiv[i] = r} key={i}
          item={content} order={i} config={this.config} idx={this.state.idx}/>
      )
    );
    return (
      <React.Fragment>
        <div className="outBox" >
          <div className="innerBox" ref={this.inDiv}>
            <div className="cardAll" ref={this.tlDiv}
              onMouseDown={e => this.handleEvent(e)}
              onMouseMove={e => this.handleEvent(e)}
              onMouseUp={e => this.handleEvent(e)}
              onMouseOut={e => this.handleEvent(e)}
              onTouchStart={e => this.handleEvent(e)}
              onTouchMove={e => this.handleEvent(e)}
              onTouchEnd={e => this.handleEvent(e)}
            >
              {cList}
            </div>
          </div>
        </div>
        <div className="navibtn">
          <div className="navibtnLeft" onClick={this.handleOnLeftBtn}></div>
          <span>{this.state.idx + 1}/{this.slideState.maxSlide}</span>
          <div className="navibtnRight" onClick={this.handleOnRightBtn}></div>
        </div>
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
    }
  ]
};

CarouselTimeline.protoTypes = {
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
  , customProp: function (props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to `' + componentName + '`. Validation failed.'
      );
    }
  }
}

export default CarouselTimeline;