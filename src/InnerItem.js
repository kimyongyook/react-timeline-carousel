import React, {Component} from 'react';
import './Timeline.css'

class InnerItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            content : this.props.item
        }
        
        this.order = this.props.order;
        this.config = this.props.config;
    }

    componentDidMount(){
        console.log("component"+this.order+" mount")
    }
    
    render(){
        const { content } = this.state;
        const order = this.order;
        return(
            <div className="item" style={{minWidth : (order===this.props.idx?this.config.fstItemWidth:this.config.anotherItemWidth)}}>
                <div className="mediaWrap" style={{width : (order===this.props.idx?'59%':'100%'),boxShadow : order===this.props.idx?'0px 5px 10px rgb(124, 120, 120)':'none', borderRadius: order===this.props.idx?'':'10px'}}>
                    {content.mediaType === 'image' ? <img src={content.mediaSrc} alt={content.mediaSrc} /> : <video src={content.mediaSrc} controls />}
                </div>
                <div className="contentsWrap" style={{display : (order===this.props.idx?'block':'none'),boxShadow : order===this.props.idx?'5px 5px 10px rgb(124, 120, 120)':'none'}}>
                    <div className="profileWrap">
                        <div className="imgProfile" style={{ backgroundImage: (content.profile.profileImgSrc !== '' && 'url(' + content.profile.profileImgSrc + ')') }}></div>
                        <div className="nameProfile">
                            <p>{content.profile.profileName}</p><pre>{content.profile.profileIntro}</pre></div>
                    </div>
                    <hr />
                    <div className="textWrap">
                        <pre>{content.boardContent.textSrc}</pre>
                    </div>
                </div>
            </div>
        );
    }
}

export default InnerItem;