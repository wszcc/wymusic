import React,{ Component } from 'react'
import './globalrank.css'
import { withRouter } from 'react-router-dom'
class GlobalRank extends Component{
    backgroundImg=()=>({
        backgroundImage:`url(${this.props.globalRank.coverImgUrl})`
    })
    handleClick=()=>{
        this.props.history.push(`/songlist/${this.props.globalRank.id}`)
    }
    render(){
        return (
            <div onClick={this.handleClick} style={this.backgroundImg()} className="globalrank">
                <div className='time'>{this.props.globalRank.updateFrequency}</div>
                <div className='title'>{this.props.globalRank.name}</div>
            </div>
        )
    }
}
export default withRouter(GlobalRank)