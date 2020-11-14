import React,{ Component } from 'react'
import './tag.css'
import { withRouter } from 'react-router-dom'
 class Tag extends Component{
    handleClick=()=>{
        this.props.getSearchWord(this.props.title)
        
    }
    render(){
        return (
            <div onClick={this.handleClick} className='search-tag'>
                {this.props.title}
            </div>
        )
    }
}
export default withRouter(Tag)