import React from 'react'
import {Link} from "react-router-dom"

const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <div className='flex min-h-screen justify-center items-center'>
   <div className=' border p-4'>
    <h1 className='text-2xl mb-6 font-bold text-center'>Login</h1>
    <div className='flex flex-col space-y-2'>
      <input type="text" className='border px-1 w-[370px] h-[40px]' placeholder="Enter email"
          value={email} 
          onChange={(e)=>{
            setEmail(e.target.value)
          }}/>
          <input type="password" className='border px-1 w-[370px] h-[40px]' placeholder="Enter Password"
          value={password} 
          onChange={(e)=>{
            setPassword(e.target.value)
          }}/>
      <button type="submit" className='border border-black h-[40px] hover:bg-black hover:text-white active:scale-95 duration-150'>Login</button>
      <p>New? <Link to="/signup"><span className='underline cursor-pointer font-semibold'>Signup here</span></Link></p>
    </div>
   </div>
   </div>
  )
}

export default Login