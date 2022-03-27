import React from 'react'

function coin({name,icon,price,symbol}) {          // components and Props in React
  return (
    <div className='coin'>
        <h1>Name : {name}</h1>
        <img scr={icon}/>
        <h3>Price : {price}</h3>
        <h3>Symbol : {symbol}</h3>
    </div>
  )
}

export default coin