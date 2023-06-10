import React from 'react'
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

const NavLink = ({to, text} : { to : string, text : string } ) => {
  return (
    <Link as={NextLink} href={to}>
        {text}
    </Link>
  )
}

export default NavLink