import React from 'react'
import { Link } from 'react-router-dom'
import { PATH } from '../../routes/path'

const Homepage = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl text-center text-red-600">Day 3 🔥</h1>
        <ul className="mt-10">
          <li className="text-3xl text-red-500 text-center">
            <Link to={PATH.TIMER}>Bài 1</Link>
          </li>
          <li className="text-3xl text-red-500 text-center">
            <Link to={PATH.CURRENCY}>Bài 2</Link>
          </li>
          <li className="text-3xl text-red-500 text-center">
            <Link to={PATH.UNIVERSITY}>Bài 3</Link>
          </li>
        </ul>
      </div>
      <div className="mt-10">
        <h1 className="text-4xl text-center text-red-600">Day 4 ️🎶 </h1>
        <h3 className="text-center">
          <Link className="text-3xl text-red-500 " to={PATH.PE01}>
            PE-01
          </Link>
        </h3>
      </div>
    </div>
  )
}

export default Homepage
