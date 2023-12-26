import React from 'react'

export const Child = (props) => {
    const{day}=props;
  return (
    <>
        <div>
			 <h1>Days</h1>
             <ul>
                {day.map((day,index)=>(
                    <li key={index}>{day}</li>
                ))}
             </ul>
        </div>
    </>
  )
}
export default Child;