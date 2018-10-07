import React, { Component } from 'react';
import logo from './logo.svg';
import './reset.css';
import './App.css';
import axios from 'axios';
import SelectBox from './components/selectBox/SelectBox';
import Header from './components/header/Header';
import chordObj from './chordObj';
import Song from './components/song/Song'
import Button from './components/button/Button'
import SongNamer from './components/songNamer/SongNamer'

class App extends Component {


  constructor() {
    super();
    // this.headers = 'Guitarparty-Api-Key: d9faf2e82be03a79b923ef1e32d8cc5526021541'
    this.state = {
      chord: '',
      value: 'A',
      songChords: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.songClick = this.songClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }



  handleClick() {
    const chordId = this.state.value
    axios.get(`http://api.guitarparty.com/v2/chords/?query=${chordId}`,{headers: {
        'Guitarparty-Api-Key': 'd9faf2e82be03a79b923ef1e32d8cc5526021541'}})
    .then(res => {
        this.setState({
            chord: res.data.objects[0].image_url
        })
    })
}

handleChange(e) {
  // console.log('target', e.target.value)
          this.setState({
            value: e.target.value
          }) 
          // console.log('target', e.target.value)
      }    
  
songClick() {
  // console.log('Imported Chord Value', chordObj[this.state.value])
  axios.post('/data', {value: chordObj[this.state.value]})
    .then(res => {
      // console.log(res.data)
      this.setState({
        songChords : res.data
      })
      // console.log(this.state.songChords)
    })
    // console.log?('It Worked!!!', this.state.songChords)
}

  handleDelete() {
 
    axios.delete('/data')
    .then(res => {
      console.log("Is this empty???", res.data)
      this.setState({
        songChords: res.data
      })
    })
    
  }




  render() {
    // console.log('Render Called', this.state.value)
    // console.log(this.state.value)
  
    return (
      <div className="window-div">
        <div className="body-div">

          <div className="container">

            <div className="left-col">
              <div className="header-box">
              <h1>Pick-a-Chord</h1>
              </div>
              <SelectBox
              clickFunc={this.handleClick}
              changeFunc={this.handleChange}
              chord={this.state.chord}
              />
              <div className="img-box">
              </div>
            </div>

            <div className="center-col">
              <div className="hero-box">

              </div>
              
 
              <button onClick={this.songClick}>Add this chord to your song!</button>
              
            </div>

            <div className="right-col">
              <div className="header-box">
                <h1>Write-a-Song</h1>
              </div>
              <div className="namer-box">
                <SongNamer/>
              </div>
                <div className="song-box">
                  <Song
                  chords={this.state.songChords}
                  />
                </div>
                <Button
                click={this.handleDelete}
                name="Delete this Song"
                
                />
            </div>

          </div>
        </div>
        {/* <footer>
          <p>&copy; ChordFinder 2018</p>
        </footer> */}
      </div>
    );
  }
}

export default App;


