import React, {Component, Fragment} from 'react';
import './css/Timeline.css'

class NaviBtn extends Component{
    constructor(props){
        super(props);
        this.config = this.props.config;
    }

    componentDidMount(){
        console.log("component mount");
    }
    
    render(){
        console.log("renderNaviBtn");
        let DivBtn = null;
        if (this.config.both) {
            DivBtn = 
            <Fragment>
                <div className="navibtnLeft" style={{ float: 'left' }} onClick={this.props.e.left}></div>
                <div className="navibtnRight" style={{ float: 'right' }} onClick={this.props.e.right}></div>
            </Fragment>
        } else {
            DivBtn = 
            <div className="navibtn">
                <div className="navibtnLeft" onClick={this.props.e.left}></div>
                {this.config.paging && <span style={{top:0,left:0, margin:"auto"}}>{this.props.idx + 1} / {this.props.slideState.maxSlide}</span>}
                <div className="navibtnRight" onClick={this.props.e.right}></div>
            </div>
        }
        return (
            <Fragment>
                { DivBtn }
            </Fragment>
        );
    }
}

NaviBtn.defaultProps = {
    config : {
        button: true // [true, false]
        , paging : true
        , position: 'outer-bottom' // [inner-top, inner-bottom, outer-top, outer-bottom]
        , both : false
    }
};

export default NaviBtn;