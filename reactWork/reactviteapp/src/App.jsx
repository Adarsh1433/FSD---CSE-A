import React from 'react'
import Student from './Student';

function App() {
  let a=12;
  const mystyle={
    backgroundColor:'green',
    color:'cyan'
  }
  return (
    <div style={{color:'cyan',backgroundColor:'red'}}>ABES Engineering College
    <div style={mystyle}>{a}</div>
    <div style={{color:'blue',width:'fit-content'}}>
      <Student college={"ABES Engineering College"} name='Adarsh' roll='4' branch='cse' section='a'/>
    </div>
    </div>
    
  )
}

export default App