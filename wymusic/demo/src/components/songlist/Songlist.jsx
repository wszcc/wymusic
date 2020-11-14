import React, { Component } from 'react'
import './songlist.css'
import { reqSongLIist } from '../../api/index'
import  ListItem  from './listitem/ListItem'
import { withRouter } from 'react-router-dom'
 class Songlist extends Component {
    constructor(props){
        super(props)
        this.state={
            songListNum:[]
        }
    }
    handleClick=()=>{
        this.props.history.push('/home')
    }
    componentDidMount(){
        reqSongLIist('/personalized',{limit:100})
        .then(res=>{
            this.setState({
                songListNum:res.data.result
                
            })
            
        })
      
    }
    backgroundColor={
        backgroundColor:this.props.backgroundColor
    }
    render() {
        return (
            <div>
                <div style={this.backgroundColor} className="home-songlist">
                    <div onClick={this.handleClick} className='iconfont'>&#xe60d;</div>
                    <div>歌单</div>
                </div>
                <div className='songlistitem'>
                    {
                        this.state.songListNum.map(val=>(
                            <ListItem songInfo={val}></ListItem>
                        ))
                    }
                </div>
            </div>
        )
    }
}
export default withRouter(Songlist)