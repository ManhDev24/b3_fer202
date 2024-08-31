import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import StudentSearch from './StudentSearch/StudentSearch'
import SubjectSearch from './SubjectSearch/SubjectSearch'
import { ListStudent } from './ListStudent'

const Pe01 = () => {
  return (
    <div className="row container-fluid">
      <div className="col-md-12 text-center mb-6">
        <h1 className=" text-center font-medium">Students Management</h1>
        <StudentSearch />
      </div>
      <div className="col-md-3">
        <SubjectSearch />
      </div>
      <div className="col-md-8">
        <ListStudent />
      </div>
    </div>
  )
}

export default Pe01
