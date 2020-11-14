import React, { Component } from 'react'
import { reqSongById } from '../../api/index.js'
import './playsonglist.css'
import { withRouter } from 'react-router-dom'
import { SongItem } from './songitem/SongItem'
class PlaySongList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playInfoList: ''
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id
        const a = async () => {
            const res = await reqSongById('/playlist/detail', { id: id })
            this.setState({
                playInfoList: res.data.playlist
            })
        }
        a()
    }
    coverImg = () => ({
        backgroundImage: `url(${this.state.playInfoList.coverImgUrl})`
    })
    handleClick = () => {
        this.props.history.push('/home')
    }
    render() {
        return (
            <div className="playsonglist">
                <div style={this.coverImg()} className="bg bg-blur"></div>
                <div className='song-header'>
                    <div>
                        <i onClick={this.handleClick} className='iconfont'>&#xe60d;</i>
                        {this.state.playInfoList.name}
                    </div>
                    <div className="body">
                        <div style={this.coverImg()} className='coverimg'>
                            <i className="iconfont">&#xe607;</i>
                            {this.state.playInfoList.shareCount}万
                       </div>
                        <div className='word'>{this.state.playInfoList.name}
                            <br />
                            <br />
                            <br />
                            <span>{this.state.playInfoList.updateFrequency}</span>
                        </div>
                    </div>
                </div>
                <div className='play-song-list'>
                    {this.state.playInfoList?
                        this.state.playInfoList.tracks.map((val,index) => (
                            <SongItem setState={this.props.setState} key={val.id} index={index} songInfo={val}></SongItem>
                        ))
                    :''}
                </div>
            </div>
        )
    }
}
export default withRouter(PlaySongList)