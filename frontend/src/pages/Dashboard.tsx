import axios from 'axios';
import { useParams } from 'react-router-dom';
import React from 'react';

const Dashboard = () => {
    const {userName}=useParams();
    const [user,setUser]=React.useState('');
    const getUser=async()=>{
        const resp=axios.get('http://localhost:3000/auth/user')
    }
  return (
    <div>
        <div>Hello my Lovely <strong>{userName}</strong></div>
    </div>
  )
}

export default Dashboard