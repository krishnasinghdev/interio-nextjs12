import React from 'react'
import Signup from '../components/Signup'
import Signin from '../components/Signin'
import NewCollection from '../components/NewCollection'

const dev = () => {
  return (
    <div className='bg-black pb-16 flex flex-col gap-y-16 justify-center items-center' >
      <Signup/>
      <Signin/>
      <NewCollection/>
    </div>
  )
}

export default dev