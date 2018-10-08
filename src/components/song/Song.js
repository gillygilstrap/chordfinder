import React from 'react'
import './song.css'
export default function Song (props){
console.log('The Props Value', props.chords)

  return (
    <div>
        {props.chords.map(function(elem) {
          return (<li>{elem.id + '. ' + elem.value + ', '}</li>)
        })}
    </div>
  )
}
