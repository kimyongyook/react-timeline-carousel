import React from 'react';
import './Timeline.css'

class CarouselTimeline extends React.Component {
  constructor(props){
    super(props);
    this.tlDiv = React.createRef();
    this.inDiv = React.createRef();
    this.itemDiv =[];

    this.state = {
      contents : this.props.data
      ,idx : 0
    }
    this.mouseState = {
      isClick : false
      ,startX : 0
      ,nowX : 0
    }
    this.slideState = {
      currentX : 0
      ,idx : 0
      ,maxSlide : this.state.contents.length
    }

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);

    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.handleOnLeftBtn = this.handleOnLeftBtn.bind(this);
    this.handleOnRightBtn = this.handleOnRightBtn.bind(this);
  }

  componentWillMount(){
    console.log("componentWillMount");
    document.addEventListener('keydown', this.handleKeyPress, false);

    
  }

  componentWillUnmount(){
    console.log("componentWillUnmount");
    document.removeEventListener('keydown', this.handleKeyPress, false);
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.itemDiv[0].setAttribute("style","min-width:700px;");
    this.itemDiv[0].childNodes[0].setAttribute("style","width:59%; box-shadow : 0px 5px 10px rgb(124, 120, 120);");
    this.itemDiv[0].childNodes[1].setAttribute("style","display:block; box-shadow : 5px 5px 10px rgb(124, 120, 120);");

    console.log(this.inDiv.current.offsetWidth);
    this.slideState.currentX = this.inDiv.current.offsetWidth/2 - this.itemDiv[0].offsetWidth/2 ;
    this.tlDiv.current.style.transform="translateX("+this.slideState.currentX+"px)";
  }


  handleMouseDown(e) {
    this.mouseState.isClick = true;
    this.mouseState.startX = e.clientX;
    e.preventDefault();
  }
  handleMouseMove(e){
    if (this.mouseState.isClick) this.mouseState.nowX = e.clientX;
  }
  
  handleMouseUp(){
    this.mouseState.nowX > this.mouseState.startX ? this.handleOnLeftBtn() : this.handleOnRightBtn()
    this.mouseState.isClick = false;
  }
  handleMouseOut(){
    this.mouseState.isClick = false;
  }

  handleOnRightBtn(){
    if(this.state.idx<this.slideState.maxSlide-1){
      this.setState((prevState) => ({
        idx : prevState.idx + 1
      }));
      this.slideState.idx++;
      this.moveTimeline(-1);
    } 
  }
  handleOnLeftBtn(){
    if(this.state.idx>0){
      this.setState((prevState) => ({
        idx : prevState.idx - 1
      }));
      this.slideState.idx--;
      this.moveTimeline(1);
    }
  }

  handleKeyPress(e){
    if(e.key === "ArrowRight"){
      this.handleOnRightBtn();
    }else if(e.key === "ArrowLeft"){
      this.handleOnLeftBtn();
    }else{
      return;
    }
  }

  moveTimeline(direction){
    this.slideState.currentX += direction*this.itemDiv[this.slideState.idx].offsetWidth;
    this.focusItem(direction);
    this.tlDiv.current.style.transform="translateX("+this.slideState.currentX+"px)";
  }

  focusItem(direction){
    // console.log(this.slideState.idx+"::"+this.slideState.maxSlide);
    if (this.slideState.idx+direction>=0 && this.slideState.idx+direction < this.slideState.maxSlide) {
      this.itemDiv[this.slideState.idx+direction].setAttribute("style","");
      this.itemDiv[this.slideState.idx+direction].childNodes[0].setAttribute("style","");
      this.itemDiv[this.slideState.idx+direction].childNodes[1].setAttribute("style","display:none;");
    }
    this.itemDiv[this.slideState.idx].setAttribute("style","min-width:700px;");
    this.itemDiv[this.slideState.idx].childNodes[0].setAttribute("style","width:59%; box-shadow : 0px 5px 10px rgb(124, 120, 120);");
    this.itemDiv[this.slideState.idx].childNodes[1].setAttribute("style","display:block; box-shadow : 5px 5px 10px rgb(124, 120, 120);");
  }

  render(){
    const { contents } = this.state;
    const cList = contents.map(
      (content,i) => (
        <div className="item" ref={r => this.itemDiv[i]= r} key={i} > 
          <div className="mediaWrap" onMouseDown ={e => this.handleMouseDown(e)}
              onMouseMove={e => this.handleMouseMove(e)}
              onMouseUp={e => this.handleMouseUp(e)}
              onMouseOut={e => this.handleMouseOut(e)}>
            {content.mediaType==='image'?<img src={content.mediaSrc} alt={content.mediaSrc} />:<video src={content.mediaSrc} controls/>}
          </div>
          <div className="contentsWrap">
            <div className="profileWrap">
              <div className="imgProfile" style={{backgroundImage : (content.profile.profileImgSrc!==''&&'url('+content.profile.profileImgSrc+')')}}></div>
              <div className="nameProfile"><p>{content.profile.profileName}</p><pre>{content.profile.profileIntro}</pre></div>
            </div>
            <hr/>
            <div className="textWrap">
              <pre>{content.boardContent.textSrc}</pre>
            </div>
          </div>
        </div >
      )
    );
    return (
      <React.Fragment>
        <div className="outBox" >
          <div className="innerBox" ref={this.inDiv}>
            <div className="cardAll" ref={this.tlDiv}>
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