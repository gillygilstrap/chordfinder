import React from 'react'
import './song.css'
export default function Song (props){
// console.log('The Props Value', props.chords)

  return (
    <div>
        {props.chords.map(function(elem,i) {
        // return (<li key={i}>{elem.id + '. ' + elem.value + ', '}</li>)
         return (<li key={i}><span classname="chord-num">{elem.id + '.'}</span> {elem.value + ', '}</li>)
        })}
    </div>
  )
}
