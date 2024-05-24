import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [err,setErr]=React.useState('');
  const navigate=useNavigate();
  const handleSubmit= async()=>{
    const data={
      username,
      email,
      password
    }

    try{
    const resp=await axios.post('http://localhost:3000/auth/signup',data);
    console.log(resp)
    navigate(`/login`);
    }catch(e){
      console.log(e)
      setErr(e?.response?.data?.error);
    }
  }

  return (
    <div className='flex min-h-screen justify-center items-center'>
      <div className=' border p-4'>
        <h1 className='text-2xl mb-6 font-bold text-center'>Register now</h1>
        <div className='flex flex-col space-y-2'>
          <input type="text" className='border px-1 w-[370px] h-[40px]' placeholder="Enter username"
          value={username} 
           onChange={(e)=>{
            setUsername(e.target.value)
           }}/>
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
          <button type="submit" className='border border-black h-[40px] hover:bg-black hover:text-white active:scale-95 duration-150' onClick={handleSubmit}>Login</button>
          <p className='text-red-500 font-semibold'>{err || 'ERR'}</p>
          <p>Already have an account ? <Link to="/login"> <span className='underline cursor-pointer font-semibold'>Login here</span></Link></p>
        </div>
      </div>
    </div>
  )
}

export default Signup
