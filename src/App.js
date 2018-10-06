import React, { Component } from 'react';
import logo from './logo.svg';
import './reset.css';
import './App.css';
import axios from 'axios';
import SelectBox from './components/selectBox/SelectBox';
import Header from './components/header/Header';
import chordObj from './chordObj';
import Song from './components/song/Song'

class App extends Component {


  constructor() {
    super();
    // this.headers = 'Guitarparty-Api-Key: d9faf2e82be03a79b923ef1e32d8cc5526021541'
    this.state = {
      chord: '',
      value: 'C',
      songChords: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.songClick = this.songClick.bind(this)
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
                <div className="song-box">
                <Song
                chords={this.state.songChords}
                />
              </div>
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


// .catch(e => console.log(e))
/* <div className="full-body">

<header>

</header>
<div className="container">
  <h1>Tell me my fortune</h1>
  <select value={this.state.value} onChange={this.changeChordValue} >
    <option value="A">A Major</option>
    <option value="B">B Major</option>
    <option value="C">C Major</option>
    <option value="D">D Major</option>
    <option value="E">E Major</option>
    <option value="F">F Major</option>
    <option value="G">G Major</option>
    <option value="Ab">Ab Major</option>
    <option value="Bb">Bb Major</option>
    <option value="Db">Db/C# Major</option>
    <option value="Eb">Eb Major</option>
    <option value="Gb">Gb/F# Major</option>
    <option value="Am">a Minor</option>
    <option value="Bm">b Minor</option>
    <option value="Cm">c Minor</option>
    <option value="Dm">d Minor</option>
    <option value="Em">e Minor</option>
    <option value="Fm">f Minor</option>
    <option value="Gm">g Minor</option>
    <option value="A#m">a#/bb Minor</option>
    <option value="C#m">c# Minor</option>
    <option value="D#m">d#/eb Minor</option>
    <option value="G#m">g#/ab Minor</option>
    <option value="F#m">A Minor</option>
    <option value="A7">A7</option>
    <option value="B7">B7</option>
    <option value="C7">C7</option>
    <option value="D7">D7</option>
    <option value="E7">E7</option>
    <option value="F7">F7</option>
    <option value="G7">G7</option>
    <option value="Ab7">Ab7</option>
    <option value="Bb7">Bb7</option>
    <option value="Db7">Db7/C#7</option>
    <option value="Eb7">Eb7</option>
    <option value="Gb7">Gb7/F#7</option>
  </select>
  <button onClick={() => this.fetchData()}>Get the chord!!!</button>
  <p> {this.state.fortune} </p>
  <button>Get a Chord!</button>
  <br/>
  <img src={this.state.chord} alt=""/>
</div>  
</div> */