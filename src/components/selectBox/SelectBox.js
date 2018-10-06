import React, { Component } from 'react';
import './reset.css';
import './style.css'


export default function SelectBox (props) {
    return (
        <div className="chord-picker">
            <button onClick={(e) => props.clickFunc(e)}>Get the chord!!!</button>
            <select value={props.value} onChange={(e) => props.changeFunc(e)} >
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
                <p></p>
                <br/>
                <div className="img-div">
                    <img src={props.chord} alt=""/>
                </div>
        </div>
    )
  }


 



// export default class SelectBox extends Component {

//     constructor() {
//         super();
//         this.state = {
//             chord: '',
//             value: 'C'
//         }
//         this.changeChordValue = this.changeChordValue.bind(this)
//     }
    

//     fetchData() {
//         const chordId = this.state.value
//         axios.get(`http://api.guitarparty.com/v2/chords/?query=${chordId}`,{headers: {
//             'Guitarparty-Api-Key': 'd9faf2e82be03a79b923ef1e32d8cc5526021541'}})
//         .then(res => {
//             this.setState({
//                 chord: res.data.objects[0].image_url
//             })
//         })
//     }
    
//     changeChordValue(e) {
//         this.setState({
//           value: e.target.value
//         })
//     }
   
//     render() {
//         return (
//             <div className="chord-picker">
//                 <button onClick={() => this.fetchData()}>Get the chord!!!</button>
//                 <select value={this.state.value} onChange={this.changeChordValue} >
//                     <option value="A">A Major</option>
//                     <option value="B">B Major</option>
//                     <option value="C">C Major</option>
//                     <option value="D">D Major</option>
//                     <option value="E">E Major</option>
//                     <option value="F">F Major</option>
//                     <option value="G">G Major</option>
//                     <option value="Ab">Ab Major</option>
//                     <option value="Bb">Bb Major</option>
//                     <option value="Db">Db/C# Major</option>
//                     <option value="Eb">Eb Major</option>
//                     <option value="Gb">Gb/F# Major</option>
//                     <option value="Am">a Minor</option>
//                     <option value="Bm">b Minor</option>
//                     <option value="Cm">c Minor</option>
//                     <option value="Dm">d Minor</option>
//                     <option value="Em">e Minor</option>
//                     <option value="Fm">f Minor</option>
//                     <option value="Gm">g Minor</option>
//                     <option value="A#m">a#/bb Minor</option>
//                     <option value="C#m">c# Minor</option>
//                     <option value="D#m">d#/eb Minor</option>
//                     <option value="G#m">g#/ab Minor</option>
//                     <option value="F#m">A Minor</option>
//                     <option value="A7">A7</option>
//                     <option value="B7">B7</option>
//                     <option value="C7">C7</option>
//                     <option value="D7">D7</option>
//                     <option value="E7">E7</option>
//                     <option value="F7">F7</option>
//                     <option value="G7">G7</option>
//                     <option value="Ab7">Ab7</option>
//                     <option value="Bb7">Bb7</option>
//                     <option value="Db7">Db7/C#7</option>
//                     <option value="Eb7">Eb7</option>
//                     <option value="Gb7">Gb7/F#7</option>
//                 </select>
//                 <p> {this.state.fortune} </p>
//                 <br/>
//                 <div className="img-div">
//                     <img src={this.state.chord} alt=""/>
//                 </div>
//           </div>
//         )
//       }
// }




//   render() {

//     return (
//         <div className="full-body">

//         <header>

//         </header>
//         <div className="container">
//           <h1>Tell me my fortune</h1>
//           <select value={this.state.value} onChange={this.changeChordValue} >
//             <option value="A">A Major</option>
//             <option value="B">B Major</option>
//             <option value="C">C Major</option>
//             <option value="D">D Major</option>
//             <option value="E">E Major</option>
//             <option value="F">F Major</option>
//             <option value="G">G Major</option>
//             <option value="Ab">Ab Major</option>
//             <option value="Bb">Bb Major</option>
//             <option value="Db">Db/C# Major</option>
//             <option value="Eb">Eb Major</option>
//             <option value="Gb">Gb/F# Major</option>
//             <option value="Am">a Minor</option>
//             <option value="Bm">b Minor</option>
//             <option value="Cm">c Minor</option>
//             <option value="Dm">d Minor</option>
//             <option value="Em">e Minor</option>
//             <option value="Fm">f Minor</option>
//             <option value="Gm">g Minor</option>
//             <option value="A#m">a#/bb Minor</option>
//             <option value="C#m">c# Minor</option>
//             <option value="D#m">d#/eb Minor</option>
//             <option value="G#m">g#/ab Minor</option>
//             <option value="F#m">A Minor</option>
//             <option value="A7">A7</option>
//             <option value="B7">B7</option>
//             <option value="C7">C7</option>
//             <option value="D7">D7</option>
//             <option value="E7">E7</option>
//             <option value="F7">F7</option>
//             <option value="G7">G7</option>
//             <option value="Ab7">Ab7</option>
//             <option value="Bb7">Bb7</option>
//             <option value="Db7">Db7/C#7</option>
//             <option value="Eb7">Eb7</option>
//             <option value="Gb7">Gb7/F#7</option>
//           </select>
//           <button onClick={() => this.fetchData()}>Get the chord!!!</button>
//           <p> {this.state.fortune} </p>
//           <button>Get a Chord!</button>
//           <br/>
//           <img src={this.state.chord} alt=""/>
//         </div>  
//       </div>
//     )
//   }
// }
