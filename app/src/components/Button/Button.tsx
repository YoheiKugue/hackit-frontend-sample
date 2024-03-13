'use client'

import { Button as ButtonComponent } from '@radix-ui/themes'
import { FC, ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
}

const Button: FC<ButtonProps> = (props) => {
  const { children } = props
  return <ButtonComponent>{children}</ButtonComponent>
}

export default Button
