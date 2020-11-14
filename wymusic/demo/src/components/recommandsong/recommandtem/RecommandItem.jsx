import React,{ Component } from 'react'
import './recommanditem.css'
import { withRouter } from 'react-router-dom'
 class RecommandItem extends Component{
    backgroundImg=()=>(
        {backgroundImage:`url(${this.props.itemInfo.picUrl})`}
    )
    handleClick=()=>{
        this.props.history.push(`/songlist/${this.props.itemInfo.id}`)
    }
    render(){
        return (
            <div onClick={this.handleClick} style={this.backgroundImg()} className="recommanditem">
                {this.props.itemInfo.name}
            </div>
        )
    }
}
export default withRouter(RecommandItem)