import React,{ Component } from 'react'
import { Toast } from 'antd-mobile'
import './skinitem.css'
export class SkinItem extends Component{
    skinStyle={
        backgroundColor:this.props.info.color
    }
    handleChangeColor=()=>{
      this.props.changeColor(this.props.info.color)
       Toast.info('皮肤设置成功', 1)
    }
    render(){
        return (
            <div onClick={this.handleChangeColor} style={this.skinStyle} className='skin-item'>
                {this.props.info.title}
            </div>
        )
    }
}