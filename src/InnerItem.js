import React, {Component} from 'react';
import MediaWrap from './MediaWrap'
import ContentWrap from './ContentWrap'
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
        console.log("render"+this.order);
        const order = this.order;
        return(
            <div className="item" style={{minWidth : (order===this.props.idx?this.config.fstItemWidth:this.config.anotherItemWidth)}}>
                <MediaWrap item={content} order={order} config={this.config} idx={this.props.idx}/>
                {this.config.contentType === 'timeline-feed' ?
                    <ContentWrap item={content} order={order} config={this.config} idx={this.props.idx} />
                    : ''}
            </div>
        );
    }
}

export default InnerItem;