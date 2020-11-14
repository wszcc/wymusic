import React from 'react';
import { Home } from './components/home/Home'
import { Search } from './components/search/Search'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { Ranking } from './components/ranking/Ranking.jsx'
import Songlist from './components/songlist/Songlist'
import { RecommandSong } from './components/recommandsong/RecommandSong'
import PlaySongList from './components/playsonglist/PlaySongLIst'
import { Audio } from './components/audio/Audio'
import { Skin } from './components/skin/Skin'

class App extends React.Component {
  state = {
    backgroundColor: 'red',
    songInfo:''
  }
  changeColor=(color)=>{
    this.setState({
      backgroundColor:color
    })
  }
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            
            <Route path='/search' component={Search}>
              <Search setState={this.setState.bind(this)} backgroundColor={this.state.backgroundColor}></Search>
            </Route>
            <Route path='/skin' component={Skin}>
              <Skin changeColor={this.changeColor.bind(this)} backgroundColor={this.state.backgroundColor}></Skin>
            </Route>
            <Route  path='/songlist/:id' component={PlaySongList} >
             <PlaySongList setState={this.setState.bind(this)}></PlaySongList>
            </Route>
            <Route path='/recommand/song' component={RecommandSong} >
              <RecommandSong backgroundColor={this.state.backgroundColor}></RecommandSong>
            </Route>
            <Route path='/ranking' component={Ranking}>
              <Ranking backgroundColor={this.state.backgroundColor}></Ranking>
            </Route>
            <Route path='/home' component={Home}>
            <Home backgroundColor={this.state.backgroundColor}></Home>
            </Route>
            <Route path='/songlist' component={Songlist}>
              <Songlist backgroundColor={this.state.backgroundColor}></Songlist>
            </Route>
            <Route component={Home}>
               <Home backgroundColor={this.state.backgroundColor}></Home>
            </Route>
          </Switch>
        </HashRouter>
        {this.state.songInfo?<Audio songInfo={this.state.songInfo}></Audio>:''}
      </div>
    )
  }
}

export default App


