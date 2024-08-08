import React, { useRef, Suspense, Fragment } from 'react'

interface StorageRef {
  promise?: Promise<void>
  resolve?: (value: void | PromiseLike<void>) => void
}

function Suspender({
  freeze,
  children
}: {
  freeze: boolean
  children: React.ReactNode
}): JSX.Element {
  const promiseCache = useRef<StorageRef>({}).current
  if (freeze && !promiseCache.promise) {
    promiseCache.promise = new Promise((resolve) => {
      promiseCache.resolve = resolve
    })
    throw promiseCache.promise as any
  } else if (freeze) {
    throw promiseCache.promise as any
  } else if (promiseCache.promise) {
    promiseCache.resolve?.()
    promiseCache.promise = undefined
  }

  return <Fragment>{children}</Fragment>
}

interface Props {
  freeze: boolean
  children: React.ReactNode
  placeholder?: React.ReactNode
}

export function Freeze({ freeze, children, placeholder = null }: Props): JSX.Element {
  return (
    <Suspense fallback={placeholder}>
      <Suspender freeze={freeze}>{children}</Suspender>
    </Suspense>
  )
}
