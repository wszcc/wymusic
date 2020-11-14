import React, { Component } from 'react'
import '../../../assets/iconfont/font_147b3x521sr/iconfont.css'
import './header.css'
import { withRouter } from 'react-router-dom'
 class Header extends Component {
    backgroundStyle={
        backgroundColor:this.props.backgroundColor
    }
    handleClick=()=>{
        this.props.history.push('/home')
    }
    componentDidUpdate(){
        document.getElementById('searchinput').value=`${this.props.searchWord}`
    }
    render() {
        return (
            <div style={this.backgroundStyle} className="search-header">
                <div onClick={this.handleClick} className='iconfont'>&#xe60d;</div>
                <div className='inputitem'><input id='searchinput' placeholder='搜索你喜欢的' style={this.backgroundStyle} type="text"/></div>
            </div>
        )
    }
}
export default withRouter(Header)