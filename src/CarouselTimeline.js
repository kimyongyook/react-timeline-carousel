import React from 'react';
import './Timeline.css'

class CarouselTimeline extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contents : this.props.data
    }
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
      <div className="outBox">
        <div className="innerBox" ref={this.contDiv}>
          <div className="cardAll">
            {cList}
          </div>
        </div>
      </div>
    );
  }
};

export default CarouselTimeline;