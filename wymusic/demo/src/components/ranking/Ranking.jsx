import React,{ Component } from 'react'
import './ranking.css'
import  Header  from './header/Header'
import  CateRank  from './cateranking/CateRank'
import { reqCateRank } from '../../api/index.js'
import  GlobalRank  from './globalrank/GlobalRank'


export class Ranking extends Component{
    constructor(props){
        super(props)
        this.state={
            topListDetail:[],
            groveStr:[],
            globalStr:[]
        }
    }
    componentDidMount(){
        reqCateRank('/toplist/detail')
        .then(res=>{
            this.setState({
                topListDetail:res.data.list,
                groveStr:res.data.list.slice(0,4),
                globalStr:res.data.list.slice(4)
            })
        })
    }
    render(){

        return (
            <div className='ranking'>
                <Header backgroundColor={this.props.backgroundColor}></Header>
                {
                    this.state.groveStr.map(val=>(
                        <CateRank key={val.tracks.first} groveRank={val}></CateRank>
                    ))
                }
                <div className="globalranktitle">全球榜</div>
               
                <div className='globalrankitem'>
                {
                    this.state.globalStr.map(val=>(
                        <GlobalRank key={val.commentThreadId} globalRank={val}></GlobalRank>
                    ))
                }
                </div>
            </div>
        )
    }
}