import React,{ Component } from 'react'
import './skin.css'
import { SkinItem } from './skinitem/Skinitem'
import Header from './header/Header'
export class Skin extends Component{
    state={
        skinList:[{color:'#E4483B',title:'网易红'},{color:'#2FC379',title:'企鹅绿'},{color:'#0C8FD7',title:'酷狗蓝'},
        {color:'#FD6600',title:'虾米橙'},{color:'black',title:'炫酷黑'},{color:'#FE87B1',title:'可爱粉'},{color:'#F8AC61',title:'土豪金'}]
        ,color:'red'
    }
    render(){
        return (
            <div>
                <Header backgroundColor={this.props.backgroundColor}></Header>
               <div className='skin-list'>
               {this.state.skinList.map(val=>(
                   <SkinItem  changeColor={this.props.changeColor} key={val.color} info={val}></SkinItem>
               ))}
               </div>
            </div>
        )
    }
}