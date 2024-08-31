import React, { useContext } from 'react'
import AppContext from '../../../Provider/Context'

const StudentSearch = () => {
  const { searchStudentValue, setSearchStudentValue } = useContext(AppContext) as any
  return (
    <div className="mt-4">
      <input value={searchStudentValue} onChange={(e) => setSearchStudentValue(e.target.value)} style={{ border: '2px solid black' }} className="w-[80%] px-3 py-1 " />
    </div>
  )
}

export default StudentSearch
