import React,{ Component } from 'react'
import './recommandsong.css'
import { reqRecommandSong } from '../../api/index.js'
import  RecommandItem  from './recommandtem/RecommandItem'
import  Header  from './header/Header.jsx'
export class RecommandSong extends Component{
    constructor(props){
        super(props)
        this.state={
            recommandSongList:[]
        }
    }
    componentDidMount(){
        reqRecommandSong('/personalized/privatecontent/list',{limit:100})
        .then(res=>{
            this.setState({
                recommandSongList:res.data.result
            })
          
        })
    }
    render(){
        return (
            <div className='recommandsong'>
                <Header backgroundColor={this.props.backgroundColor}></Header>
                {
                    this.state.recommandSongList.map(val=>(
                        <RecommandItem key={val.id} itemInfo={val}></RecommandItem>
                    ))
                }
            </div>
        )
    }
}