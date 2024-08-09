import React from 'react'
import { useState } from 'react'


function Todolist() {
    const myData=[
            {
                id: 0, myName: 'Muqaddas', age: 21
            },
            {
                id: 1, myName: 'Akram', age: 20
            },
            {
                id: 2, myName: 'Eman', age: 20
            }
    ]
    const [myArray, setMyArray]= useState(myData)
       const clearArray =()=>{
        setMyArray([])
       }
       const removeEle =(id)=>{
        const newArray=myArray.filter((currEle)=>currEle.id !==id)
        setMyArray(newArray)
       }
  return (
    <>
       <>
            {myArray.map((currEle) => (
                <div key={currEle.id}>
                    <h1>Name: {currEle.myName} - Age: {currEle.age}</h1>
                    <button onClick={() => removeEle(currEle.id)}>Remove</button>
                </div>
            ))}
            <button onClick={clearArray}>Clear</button>
        </>
    </>
  )
}

export default Todolist
