import React from 'react'

export default function Button (props){
    // console.log(props.click)
    
      return (
        <button onClick={props.click}>{props.name}</button>
      )
    }
    