import React from 'react'
import Link from 'next/link'

type ButtonType = 'primary' | 'secondary' | 'tertiary'

interface ButtonProps {
  href: string;
  text: string;
  type?: ButtonType;
}

export default function Button({text, href, type = 'primary'}: ButtonProps) {

  let aClassNames = ""
  if (type === 'primary') {
    aClassNames = 'bg-primary text-gray-900'
  } else if (type === 'secondary') {
    aClassNames = 'bg-secondary text-gray-900'
  } else {
    aClassNames = 'text-orange'
  }

  return (
    <Link href={href}>
      <a className={`${aClassNames} block py-2 px-7 rounded`}>
        {text}
      </a>
    </Link>
  )
}
