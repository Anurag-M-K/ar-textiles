'use client'
import { AuthContext } from '@/context/AuthContext'
import React, { useContext } from 'react'

function page() {
  const {user} = useContext(AuthContext)
  console.log(user)

  if(user.email != process.env.NEXT_PUBLIC_ADMIN_EMAIL ){
    return (
      <div className='flex h-screen justify-center items-center'>
        <h1 className='text-2xl font-bold text-black '>You do not have the access to see this page.</h1>
      </div>
    )
  }

  return (
    <div className='text-black'>
      
    </div>
  )
}

export default page