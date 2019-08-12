import React from 'react';
import './Timeline.css'

class FullScreen extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            contents: this.props.data
            , idx: 0
        }
    }

    componentWillMount(){
        console.log("componentWillMount");
    }
    


    render(){
        const { contents } = this.state;
        const cList = contents.map(
            (content, i) => (
                <div className="item">
                    <div className="mediaWrap">
                        {content.mediaType === 'image' ? <img src={content.mediaSrc} alt={content.mediaSrc} /> : <video src={content.mediaSrc} controls />}
                    </div>
                    <div className="contentsWrap">
                        <div className="profileWrap">
                            <div className="imgProfile" style={{ backgroundImage: (content.profile.profileImgSrc !== '' && 'url(' + content.profile.profileImgSrc + ')') }}></div>
                            <div className="nameProfile"><p>{content.profile.profileName}</p><pre>{content.profile.profileIntro}</pre></div>
                        </div>
                        <hr />
                        <div className="textWrap">
                            <pre>{content.boardContent.textSrc}</pre>
                        </div>
                    </div>
                </div >
            )
        );
        return (
            <div className="fullscreen">
                <div className="innerBox">
                    <div className="cardAll">
                        {cList}
                    </div>
                </div>
            </div>
        )
    }
}

export default FullScreen;