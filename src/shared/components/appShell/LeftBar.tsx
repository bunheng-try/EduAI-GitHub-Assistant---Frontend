import ClassesList from '@/features/class/components/ClassesList'
import React from 'react'

const LeftBar = () => {
  return (
    <div className='flex flex-col w-[100px] h-full pt-4 bg-gray-900 text-white px-4' >
      LeftBar
      <ClassesList />
    </div>
  )
}

export default LeftBar