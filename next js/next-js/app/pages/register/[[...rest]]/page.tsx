import { SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
   <SignUp forceRedirectUrl={"/pages/dashboard"} signInUrl='/pages/login' />
    </div>
  )
}

export default page