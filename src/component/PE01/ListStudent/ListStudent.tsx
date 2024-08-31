import React, { useContext } from 'react'
import AppContext from '../../../Provider/Context'

const ListStudent = () => {
  const { student, studentDetail, searchStudentValue, searchSubject, setSearchStudentValue, setSearchSubject } = useContext(AppContext) as any

  const getInfoStudent = (stuId) => {
    return studentDetail.find((item) => {
      return item.studentId === stuId
    })
  }
  const findStudent = student.filter((item) => {
    const searchStudent = item.name?.toLowerCase().includes(searchStudentValue.toLowerCase())
    const searchStudentSubject = searchSubject?.includes(item.studentId) || searchSubject?.length === 0
    console.log('searchStudentSubject: ', searchStudentSubject)
    return searchStudent && searchStudentSubject
  })
  const handleShowAll = () => {
    setSearchStudentValue('')
    setSearchSubject('')
  }
  console.log('findStudent: ', findStudent)
  return (
    <div>
      <h2>List of Students</h2>
      <button onClick={handleShowAll} className="btn btn-primary">
        Show All
      </button>
      <table className="table table-striped  table-hover">
        <thead>
          <tr>
            <th>StudentId</th>
            <th>Name</th>
            <th>Age</th>
            <th>Street</th>
            <th>City</th>
            <th>inRegularStudent</th>
            <th>View grades</th>
          </tr>
        </thead>
        <tbody>
          {findStudent.map((item, index) => {
            const detail = getInfoStudent(item.studentId)
            return (
              <tr key={item.studentId}>
                <td>{item.studentId}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{detail?.address?.street}</td>
                <td>{detail?.address?.city}</td>
                <td>{item.isRegularStudent ? 'FullTime' : 'Applicant'}</td>
                <td>
                  <a href="">Grades</a>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ListStudent
