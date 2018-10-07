import React, { Component } from 'react'
import '../reset.css';
import './SongNamer.css';
import Button from '../button/Button'
import axios from 'axios';

class SongNamer extends Component {
     constructor() {
         super()
         this.state = {
             songName: '',
             songTitle: ''
         }
         this.handleChange = this.handleChange.bind(this)
         this.updateTitle = this.updateTitle.bind(this)
        //  this.stateCleaner = this.stateCleaner.bind(this)
     }

handleChange(e) {
    this.setState({
        songName: e.target.value
    })
}

// stateCleaner() {
//     this.setState({
//         songname: ''
//     })
// }

clickTitle = () => {
    let tempVar = this.state.songName;
    this.setState({
        songTitle: tempVar,
        songName: ''
    })


}

updateTitle() {
    let tempVar = this.state.songName
    axios.put('/data',{tempVar: tempVar})
    .then(res => {
       this.setState({
           songTitle: res.data,
           songName: ''
           
       })
    })
}

  render() {

    return (
     <div className="name-box">
        <h2>{this.state.songTitle}</h2>
        <input onChange={this.handleChange} value={this.state.songName} placeholder="Give your song a name!!" type="text"/>
        <Button
        click={this.clickTitle}
        name="Add your song name"
        />
        <Button
        click={this.updateTitle}
        name="Edit your song name"
        />
      </div>
    )
  }
}

export default SongNamer