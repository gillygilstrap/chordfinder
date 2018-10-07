import React from 'react'
import '../reset.css'
import './button.css'


export default function Button (props){
    // console.log(props.click)
    
      return (
        <button onClick={props.click}>{props.name}</button>

      )
    }
    