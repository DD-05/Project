import React from 'react'
import Child from './Child';
export const Parent= () => {
    const day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return ( 
        <>
            <div>
               <Child day={day}/>
            </div>
        </>     
    )
}
export default Parent;