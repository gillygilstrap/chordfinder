import React, { Component } from 'react'
import '../reset.css';
import './style.css';
import Button from '../button/Button'
 class SongNamer extends Component {
     constructor() {
         super()
         this.state = {
             songName: '',
             songTitle: ''
         }
         this.handleChange = this.handleChange.bind(this)
     }

handleChange(e) {
    this.setState({
        songName: e.target.value
    })
}

clickTitle = () => {
    let tempVar = this.state.songName;
    this.setState({
        songTitle: tempVar
    })
}


  render() {
    return (
     <div className="name-box">
        <h2>{this.state.songTitle}</h2>
        <input onChange={this.handleChange} value={this.state.value} placeholder="Give your song a name!!" type="text"/>
        <Button
        click={this.clickTitle}
        name="Add your song name"
        />
      </div>
    )
  }
}

export default SongNamer