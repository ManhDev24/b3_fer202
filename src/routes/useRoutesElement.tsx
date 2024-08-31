import { Navigate, useRoutes } from 'react-router-dom'
import App from '../App'
import React from 'react'
import { Homepage } from '../component/Homepage'
import Timer from '../component/Timer/Timer'
import { PATH } from './path'
import { CurrencyExchange } from '../component/CurrencyExchange'
import { University } from '../component/University'
import Pe01 from '../component/PE01/Pe01'
const useRoutesElement = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Navigate to={PATH.HOME} />,
    },
    {
      path: PATH.HOME,
      element: <Homepage />,
    },
    {
      path: PATH.TIMER,
      element: <Timer />,
    },
    {
      path: PATH.CURRENCY,
      element: <CurrencyExchange />,
    },
    {
      path: PATH.UNIVERSITY,
      element: <University />,
    },
    {
      path: PATH.PE01,
      element: <Pe01 />,
    },
  ])

  return routes
}

export default useRoutesElement
