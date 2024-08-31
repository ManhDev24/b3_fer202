import React, { useContext } from 'react'
import AppContext from '../../../Provider/Context'

const SubjectSearch = () => {
  const { subject, searchSubject, setSearchSubject, studentSubject } = useContext(AppContext) as any
  const handleSearchSubject = (id) => {
    const student = studentSubject.filter((item) => {
      return item.subjectId === id
    })
    const result = student.map((item) => {
      return item.studentId
    })
    console.log('result: ', result)
    setSearchSubject(result)
  }
  return (
    <div className="ml-10">
      <h2>Subject</h2>
      <ul className="">
        {subject.map((item, index) => {
          return (
            <li className="list-none" key={index}>
              <a
                href="#"
                onClick={() => {
                  handleSearchSubject(item.subjectId)
                }}
              >
                {item.name}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SubjectSearch
