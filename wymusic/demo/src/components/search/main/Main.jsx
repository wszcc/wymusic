import React,{ Component } from 'react'
import './main.css'
import  Tag  from './tag/Tag'
import { reqHotSearch } from '../../../api/index'
export class Main extends Component{
   constructor(props){
       super(props)
       this.state={
           searchHot:[],
          
       }
   }
    componentDidMount(){
     reqHotSearch('/search/hot')
     .then(res=>{
         this.setState({
             searchHot:res.data.result.hots
         })
     })
    }
    
    render(){
        return (
            <div className='search-main'>
                <div className='hot-search'>热门搜索</div>
                <div className='tagbox'>
                    {
                        this.state.searchHot.map(val=>(
                            <Tag getSearchWord={this.props.getSearchWord} title={val.first}></Tag>
                        ))
                    }
                </div>
            </div>
        )
    }
}