import { useState } from "react";

function LoginForm ()  {
  const  [email, setEmail] = useState("");
  const  [password, setPassword] = useState("")
  const [allEntry, setallEntry] =useState([])
  const submitForm =(e)=>{
    e.preventDefault()
    const newEntry = {email:email, password:password}
    setallEntry([...allEntry, newEntry])
    setEmail('')
    setPassword('')
  }
  return (
    <>
    <form className='login-form' onSubmit={submitForm}>
      <div>
        <label htmlFor="Email">Email:</label><br />
        <input type="text" name="email" autoComplete="off" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>

        <label htmlFor="password">Password:</label><br />
        <input type="password" name="password" autoComplete="off" value={password} onChange={(e)=>setPassword(e.target.value)}/><br />
        <button type="submit">Login</button>
      </div>
    </form>
    <div>
      {
        allEntry.map((currentElement)=>{
          return( 
            <div key={currentElement}>
              <p>{currentElement.email}</p>
              <p>{currentElement.password}</p>
            </div>
          )
        })
      }
    </div>
    
    </>
  )
}

export default LoginForm
