import React, { Component } from 'react'
import '../../../assets/iconfont/font_147b3x521sr/iconfont.css'
import './Header.css'
import { reqBannerData } from '@/api/index.js'
import { Carousel } from 'antd-mobile'
import { withRouter, Link } from 'react-router-dom'


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bannerData: []
        }
    }

    componentDidMount() {
        reqBannerData('/banner').then(res => {
            this.setState({
                bannerData: res.data.banners
            })
        })
    }
    handleSkinClick=()=>{
        this.props.history.push('/skin')
    }
    handleClick = () => {
        this.props.history.replace('/search')
    }
    handleSongListClick = () => {
        this.props.history.push('/songlist')
    }
    handleRankClick = () => {
        this.props.history.push('/ranking')
    }
    backgroundColor={
        backgroundColor:this.props.backgroundColor
    }
    render() {
        return (
            <div style={this.backgroundColor} className='header'>
                <div className="head">
                    <ul>
                        <li onClick={this.handleSkinClick} className='iconfont first'>&#xe602;</li>
                        <li className='iconfont second'>&#xe765;</li>
                        <li onClick={this.handleClick} className='iconfont third'>&#xe614;</li>
                    </ul>
                </div>
                <div className="banner">
                    <Carousel
                        className='banner'
                        autoplay={true}
                        infinite
                    >
                        {this.state.bannerData.map(val => (

                            <img
                                key={val.imageUrl}
                                src={val.imageUrl}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />

                        ))}
                    </Carousel>

                </div>

                <div className='footer'>
                    <div onClick={this.handleSongListClick}><i className='iconfont'>&#xe504;</i><div>歌单</div></div>
                    <div onClick={this.handleRankClick}><i className='iconfont'>&#xe655;</i><div>排行</div></div>
                </div>
            </div>
        )
    }
}
const withHeader = withRouter(Header)
export default withHeader