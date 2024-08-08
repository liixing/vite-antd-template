import { useOutlet } from 'react-router-dom'
import { Freeze } from './Freeze'

export const KeepAlive = ({ children }: { children: JSX.Element }): JSX.Element => {
  const element = useOutlet()
  const freeze = !!element
  return (
    <>
      <Freeze freeze={freeze}>{children}</Freeze>
      {element}
    </>
  )
}
