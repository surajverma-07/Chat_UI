import React from 'react'
import "../App.css";

function Chat({
    height='h-14',
    width='w-96',
    bgmain="bgmain",
    children="default text",
    element,

}) {
  const margin = element?"mt-3":null ;
  return (
    <div className={`rounded-2xl ${height} ${width}  ${bgmain} fontpop font-normal text-sm  py-2 px-2`}>
       {element && <div className='fontpop'>{element}</div>}
      <div className={`${margin}`}>
      {children}
        </div> 
    </div>
  )
}

export default Chat
