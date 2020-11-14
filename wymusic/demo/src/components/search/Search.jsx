import React,{ Component } from 'react'
import './search.css'
import  Header  from './header/Header.jsx'
import { Main } from './main/Main.jsx'
import { reqSearchResult } from '../../api/index.js'
import { Songlist } from './songlist/Songlist'
export class Search extends Component{
    state={
        searchWord:''
    }
    getSearchWord=(word)=>{
        this.setState({
            searchWord:word,
            songs:''
        })
        reqSearchResult('/cloudsearch',{keywords:word})
        .then(res=>{
            this.setState({
                songs:res.data.result.songs
            })
        })
    }
    render(){
        return (
            <div className='search'>
                <Header backgroundColor={this.props.backgroundColor} searchWord={this.state.searchWord} backgroundColor={this.props.backgroundColor}></Header>
                {this.state.songs?'':<Main getSearchWord={this.getSearchWord}></Main>}
                {
                    this.state.songs?this.state.songs.map((val,index)=>(
                        <Songlist setState={this.props.setState} key={val.id} index={index} songInfo={val}></Songlist>
                    )):''
                }
            </div>
        )
    }
}