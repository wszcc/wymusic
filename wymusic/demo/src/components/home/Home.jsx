import React,{ Component } from 'react'
import Header from './header/Header'
import  Main  from './main/Main'
import './home.css'
export class Home extends Component{
   constructor(props){
    super(props)
   }
    render(){
        return (
            <div className="home">
                <Header backgroundColor={this.props.backgroundColor}></Header>
                <Main></Main>
            </div>
        )
    }
}