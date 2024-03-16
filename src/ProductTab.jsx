import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

export default function(){
    let rows = [];
    for(let i = 0; i<20; i++){
        rows.push(<Card id = {i}/>)
    }
    return(
        rows
    )
}