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
            <div style={this.backgroundColor} onClick={this.handleClick} className="recommand-header">
                <i className='iconfont'>&#xe60d;</i>皮肤中心
            </div>
        )
    }
}
export default withRouter(Header)