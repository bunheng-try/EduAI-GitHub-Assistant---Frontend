import AssignmentList from '@/features/assignment/components/AssignmentsList'
import React from 'react'

const MainBar = () => {
  return (
    <div className='flex flex-col w-full h-screen pt-4 bg-blue-950 text-white px-4'>
      MainBar
      <AssignmentList />
    </div>
  )
}

export default MainBar