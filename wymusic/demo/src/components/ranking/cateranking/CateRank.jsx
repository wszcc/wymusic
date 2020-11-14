import React,{ Component } from 'react'
import './caterank.css'
import { withRouter } from 'react-router-dom'

 class CateRank extends Component{
    infoList=()=>(
        this.props.groveRank.tracks.map(item => (
        <li key={item.first}>{item.first+'/'+item.second}</li>
        ))
    )
    backgroundImg=()=>(
        { backgroundImage:`url(${this.props.groveRank.coverImgUrl})`}
    )
    handleClick=()=>{
        this.props.history.push(`/songlist/${this.props.groveRank.id}`)
    }
    render(){
        return (
            <div onClick={this.handleClick} className="caterank">
                <div style={this.backgroundImg()} className='img'></div>
                <ul className='rankinfo'>
                    {this.infoList()}
                </ul>
            </div>
        )
    }
}
export default withRouter(CateRank)