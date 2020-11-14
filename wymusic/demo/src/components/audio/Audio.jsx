import React, { Component } from 'react'
import './audio.css'
import '../../assets/iconfont/font_147b3x521sr/iconfont.css'

export class Audio extends Component {
    state = {
        isPlay: true
    }
    handlePlayClick = () => {
        this.setState({
            isPlay: !this.state.isPlay
        })
        if(this.state.isPlay){
            document.getElementById('music').pause()
        }else{
            document.getElementById('music').play()
        }
    }
    render() {
        return (
            <div>
                
                <audio id='music' src={this.props.songInfo.url}></audio>
               
                <div className="audio">
                <div><img src={this.props.songInfo.pic} alt="" /></div>
                <div>
                    <ul>
                        <li>{this.props.songInfo.name}</li>
                        <li>{this.props.songInfo.title}</li>
                    </ul>
                </div>
                <div onClick={this.handlePlayClick}>{
                    this.state.isPlay ? '||' : <i className='iconfont'>&#xe501;</i>
                }</div>
                <div className='iconfont'>&#xe74a;</div>
            </div>
            
            </div>
        )
    }
}