
import React from 'react'

interface IPropsFooter {
  children: React.ReactNode;
}

export default function Footer({children}: IPropsFooter) {
  return (
    <footer>{children}</footer>
  )
}
