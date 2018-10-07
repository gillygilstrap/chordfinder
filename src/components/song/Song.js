import React from 'react'

export default function Song (props){
console.log('The Props Value', props.chords)

  return (
    <div>
        {props.chords.map(function(elem) {
          return elem.id + '. ' + elem.value + ', '
        })}
    </div>
  )
}
