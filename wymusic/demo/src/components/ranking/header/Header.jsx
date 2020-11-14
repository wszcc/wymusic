import React,{ Component } from 'react'
import './header.css'
import { withRouter } from 'react-router-dom'

 class Header extends Component{
    handleClick=()=>{
        this.props.history.push('/home')
    }
    backgroundColor={
        backgroundColor:this.props.backgroundColor
    }
    render(){
        return (
            <div style={this.backgroundColor} className="rank-header">
                <div onClick={this.handleClick}><i className='iconfont'>&#xe60d;</i>排行榜</div>
                <div className='grrank'>官方榜单</div>
            </div>
        )
    }
}
export default withRouter(Header)