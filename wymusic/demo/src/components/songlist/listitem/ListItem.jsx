import React,{ Component } from 'react'
import './listitem.css'
import '../../../assets/iconfont/font_147b3x521sr/iconfont.css'
import { withRouter } from 'react-router-dom'
 class ListItem extends Component{
    
    backgroundImageStyle={
        backgroundImage:`url(${this.props.songInfo.picUrl})`
    }
    handleClick=()=>{
        this.props.history.push(`/songlist/${this.props.songInfo.id}`)
    }
    render(){
        return (
            <div onClick={this.handleClick} className='listitem' style={this.backgroundImageStyle}>
                <div className="count">
                    <i className='iconfont headset'>&#xe607;</i>
                    &nbsp;
                    {this.props.songInfo.trackCount} 万
                </div>
                <div className="title">
                    {this.props.songInfo.name}
                </div>
            </div>
        )
    }
}
export default withRouter(ListItem)