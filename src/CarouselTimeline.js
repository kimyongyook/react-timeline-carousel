import React from 'react';
import './Timeline.css'

class CarouselTimeline extends React.Component {
  constructor(props){
    super(props);
    this.tlDiv = React.createRef();
    this.itemDiv =[]; //React.createRef();

    this.state = {
      contents : this.props.data
      ,idx : 0
    }
    this.mouseState = {
      isClick : false
      ,startX : 0
      ,nowX : 0
      ,currentX : 0
    }
    this.slideState = {
      currentX : 0
      ,idx : 0
      ,maxSlide : this.state.contents.length
      ,focusingColor : "rgba(253, 0, 0, 0.7);"
    }

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);

    this.handleOnLeftBtn = this.handleOnLeftBtn.bind(this);
    this.handleOnRightBtn = this.handleOnRightBtn.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");
    
    this.itemDiv[0].childNodes[0].setAttribute("style","border:3px solid "+this.slideState.focusingColor);
    this.itemDiv[0].childNodes[1].setAttribute("style","border:3px solid "+this.slideState.focusingColor);
  }


  handleMouseDown(e) {
    console.log("handleMouseDown"+e.clientX);
    this.mouseState.isClick = true;
    this.mouseState.startX = e.clientX;
  }
  handleMouseMove(e){
    if(this.mouseState.isClick) {
      this.mouseState.nowX = e.clientX;
      console.log("handleMouseMove");
      this.moveTimeline(this.mouseState.nowX - this.mouseState.startX);
    }
    
    
  }
  handleMouseUp(e){
    console.log("handleMouseUp");
    this.mouseState.isClick = false;
  }
  handleMouseOut(e){
    console.log("handleMouseOut");
    this.mouseState.isClick = false;
    
  }

  handleOnRightBtn(){
    console.log("handleOnRightBtn");
    if(this.state.idx<this.slideState.maxSlide-1){
      this.setState((prevState) => ({
        idx : prevState.idx + 1
      }));
      this.slideState.idx++;
      this.moveTimeline(-1);
    } 
  }
  handleOnLeftBtn(){
    console.log("handleOnLeftBtn");
    if(this.state.idx>0){
      this.setState((prevState) => ({
        idx : prevState.idx - 1
      }));
      this.slideState.idx--;
      this.moveTimeline(1);
    }
  }

  moveTimeline(direction){
    this.slideState.currentX += direction*this.itemDiv[0].offsetWidth;
    this.focusItem(direction);
    this.tlDiv.current.style.transform="translateX("+this.slideState.currentX+"px)";
  }

  focusItem(direction){
    console.log(this.slideState.idx+"::"+this.slideState.maxSlide);
    if (this.slideState.idx+direction>=0 && this.slideState.idx+direction < this.slideState.maxSlide) {
      this.itemDiv[this.slideState.idx+direction].childNodes[0].setAttribute("style","none;");
      this.itemDiv[this.slideState.idx+direction].childNodes[1].setAttribute("style","none;");
    }

    this.itemDiv[this.slideState.idx].childNodes[0].setAttribute("style","border:3px solid "+this.slideState.focusingColor);
    this.itemDiv[this.slideState.idx].childNodes[1].setAttribute("style","border:3px solid "+this.slideState.focusingColor);
  }

  render(){
    const { contents } = this.state;
    const cList = contents.map(
      (content,i) => (
        <div className="item" ref={r => this.itemDiv[i]= r} key={i}> 
          <div className="mediaWrap">
            {content.mediaType==='image'?<img src={content.mediaSrc} alt={content.mediaSrc} />:<video src={content.mediaSrc} controls/>}
          </div>
          <div className="contentsWrap">
            <span>{content.textSrc}</span>
          </div>
        </div >
      )
    );
    return (
      <React.Fragment>
        <div className="outBox">
          <div className="innerBox" ref={this.contDiv}>
            <div className="cardAll noselect" ref={this.tlDiv}
              // onMouseDown ={e => this.handleMouseDown(e)}
              // onMouseMove={e => this.handleMouseMove(e)}
              // onMouseUp={e => this.handleMouseUp(e)}
              // onMouseOut={e => this.handleMouseOut(e)}
              onMouseMove={e => this.handleMouseMove(e)}
              >
              {cList}
            </div>
          </div>
        </div>
        <div className="navibtn">
            <div className="navibtnLeft" onClick={this.handleOnLeftBtn}></div>
            <span>{this.state.idx+1}/{this.slideState.maxSlide}</span>
            <div className="navibtnRight" onClick={this.handleOnRightBtn}></div>
        </div>
      </React.Fragment>
    );
  }
};

export default CarouselTimeline;