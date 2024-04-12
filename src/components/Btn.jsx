import React from 'react'

function Btn({
    children="text",
    width,
    textcol="text-[#4C82EF]",
    bordercol="border-[#4C82EF]",
    bg="bgmain",
    cross,
    height,

}) {
    const ifflex = cross?"flex text-sm":"";
  return (
    <button className={`rounded-md h-9 font-normal border-[1.5px]  ${textcol} ${bordercol}   p-[3px] place-content-center ${height} ${bg} ${width} ${ifflex}`}>{children}{cross && cross}</button>
  )
}

export default Btn;
