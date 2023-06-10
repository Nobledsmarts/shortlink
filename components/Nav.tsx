'use client'
import React from 'react'
import NavLink from './NavLink'
import Logo from './Logo'
import Button from './Button'
import { Flex } from '@chakra-ui/layout'


const links1 = [
    {
        text : 'Features',
        href : ''
    },
    {
        text : 'Developers',
        href : ''
    },
    {
        text : 'About',
        href : ''
    },
    {
        text : 'Pricing',
        href : ''
    },
];

const Nav = () => {
    

  return (
    <Flex flexDirection={'row'} justifyContent={'space-between'}>

        <Flex flexDirection={'row'}>
            {
                links1.map(link => <NavLink to={link.href} text={link.text} />)
            }
        </Flex>

        <Flex flexDirection={'row'}>

        </Flex>
    </Flex>
  )
}

export default Nav