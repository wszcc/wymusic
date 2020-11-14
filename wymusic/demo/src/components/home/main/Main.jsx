import React,{ Component } from 'react'
import './main.css'
import { reqSongList } from '../../../api/index'
import  SongList  from './songlist/SongList'
import { withRouter } from 'react-router-dom'

 class Main extends Component{
    constructor(props){
        super(props)
        this.state={
            songList:[]
        }
    }
    componentDidMount(){
        const reqDate= async()=>{
            const res=await reqSongList('/personalized')
            this.setState({
                songList:res.data.result
            })
        }
        reqDate()
    }
    handleRecommandClick=()=>{
        this.props.history.push('/recommand/song')
    }
   
    render(){
        return (
            <div className='main'>
                <h3 onClick={this.handleRecommandClick}>推荐歌单 <i className='iconfont'>&#xe508;</i></h3>
                <div className="contain">
                    {
                        this.state.songList.map(val=>(
                         
                        <SongList key={val.id} songlist={val}></SongList>
                          
                        ))
                    }
                </div>
            </div>
        )
    }
}
export default withRouter(Main)