import React, { useEffect, useState } from 'react'

function Counts() {
    const [count,setCount]=useState(0)
    const [watched, setWatched]=useState(0)
   useEffect(()=>{
    if(count>=1){
        document.title= `Chats(${count})`}
        else{
          document.title= "Chats"
        }
   },[count, watched])
   const watch =()=>{
    document.title= "Chats"
    setWatched(0)
    setCount(0)
   }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>add chats</button>
      <button onClick={watch}>watched</button>
    </div>
  )
}

export default Counts
