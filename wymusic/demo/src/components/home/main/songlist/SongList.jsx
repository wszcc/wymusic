import React,{ Component } from 'react'
import './SongLIst.css'
import '../../../../assets/iconfont/font_147b3x521sr/iconfont.css'
import {reqSongList} from '../../../../api/index'
import { withRouter } from 'react-router-dom'
import { reqSongById } from '../../../../api/index.js'
 class SongList extends Component{
    constructor(props){
        super(props)
       
    }
    songListStyle={
        backgroundImage:`url(${this.props.songlist.picUrl})`
    }
    handlePlaySongClick=()=>{
        this.props.history.push(`/songlist/${this.props.songlist.id}`)
    }
    render(){
        return (
            <div onClick={this.handlePlaySongClick} style={this.songListStyle}  className='songlist'>
                <div className='count'><i className='iconfont'>&#xe607;</i>&nbsp;{ this.props.songlist.trackCount} 万</div>
                <div className='name'>{this.props.songlist.name}</div>
            </div>
        )
    }
}
export default withRouter(SongList)