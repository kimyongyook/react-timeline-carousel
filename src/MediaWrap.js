import React, {Component} from 'react';
import './css/Timeline.css'

class MediaWrap extends Component{
    constructor(props){
        super(props);
        this.state = {
            content : this.props.item
        }
        
        this.order = this.props.order;
        this.config = this.props.config;
    }
    render(){
        const { content } = this.state;
        const order = this.order;
        const mediaStyle = {
            width: (order === this.props.idx ? this.config.contentType!=='timeline-feed'?'100%':'59%' : '100%')
            , boxShadow: order === this.props.idx ? '0px 5px 10px rgb(124, 120, 120)' : 'none'
            , borderRadius: order === this.props.idx ? this.config.contentType!=='timeline-feed'?'10px':'' : '10px'
        }
        return(
            <div className="mediaWrap" style={mediaStyle}>
                {content.mediaType === 'image' ? <img src={content.mediaSrc} alt={content.mediaSrc} /> : <video src={content.mediaSrc} controls />}
            </div>
        );
    }
}

export default MediaWrap;