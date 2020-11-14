import React, { Component } from 'react'
import './songlist.css'
import { reqSongUrlById } from '../../../api/index.js'
export class Songlist extends Component {
    handleClick=()=>{
        reqSongUrlById('/song/url',{id:this.props.songInfo.id})
        .then(res=>{
           this.props.setState({
               songInfo:{
                   url:res.data.data[0].url,
                   name:this.props.songInfo.name,
                   title:this.props.songInfo.al.name,
                   pic:this.props.songInfo.al.picUrl
               }
           })
           document.getElementById('music').play()
        })
    }
    render() {
        return (
            <div onClick={this.handleClick} className="songitem">
                <div className='index'>{this.props.index + 1}</div>
                <ul>
                    <li>{this.props.songInfo.name}</li>
                    <li>{this.props.songInfo.al.name}</li>
                </ul>
            </div>
        )
    }
}