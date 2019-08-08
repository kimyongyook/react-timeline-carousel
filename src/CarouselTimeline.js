import React from 'react';
import './Timeline.css'

class CarouselTimeline extends React.Component {
  constructor(props){
    super(props);
    this.tlDiv = React.createRef();
    this.contDiv = React.createRef();

    this.state = {
      contents : this.props.data
    }
    this.mouseState = {
      isClick : false
      ,startX : 0
      ,nowX : 0
      ,currentX : 0
    }

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  componentDidMount() {
    
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

  moveTimeline(_x){
    this.tlDiv.current.style.transform="translateX("+_x+"px)";
    console.log(this.mouseState.currentX);
  }

  render(){
    const { contents } = this.state;
    const cList = contents.map(
      (content) => (
        <div className="item" >
          <div className="mediaWrap">
            {content.mediaType==='image'?<img src={content.mediaSrc} alt={content.mediaSrc} />:<video src={content.mediaSrc} controls/>}
          </div>
          <div className="textWrap">
            <span>{content.textSrc}</span>
          </div>
        </div >
      )
    );
    return (
      <fragment>
        <div className="outBox">
          <div className="innerBox" ref={this.contDiv}>
            <div className="cardAll noselect" ref={this.tlDiv}
              onMouseDown ={e => this.handleMouseDown(e)}
              onMouseMove={e => this.handleMouseMove(e)}
              onMouseUp={e => this.handleMouseUp(e)}
              onMouseOut={e => this.handleMouseOut(e)}
              >
              {cList}
            </div>
          </div>
        </div>
        <div ckassName="navibtn">
            <div className="navibtnLeft" onClick={this.handleOnLeftBtn}> &lt; </div>
            <div className="navibtnRight" onClick={this.handleOnRightBtn}> &gt; </div>
        </div>
      </fragment>
    );
  }
};

export default CarouselTimeline;