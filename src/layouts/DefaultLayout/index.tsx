import { Outlet } from 'react-router-dom'
import { Header } from '../../pages/Homepage/components/Header'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
