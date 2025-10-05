import React, { useEffect, useState } from 'react'
import axiosClient from "../axios-client";

const Users = () => {
  const [users, setUsers]= useState([]);
  const [loading, setLoading]= useState(false);

useEffect(()=>{},[])

const getUsers=()=>{
  setLoading(true);
 axiosClient.get('/users')
 .then(({data})=>{
  console.log(data);
 }).catch((err)=>{
  console.log(err);
  setLoading(false);
 })
}

  return (
    <div>Users</div>
  )
}

export default Users