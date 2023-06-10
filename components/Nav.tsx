'use client'
import React from 'react'
import NavLink from './NavLink'
import Logo from './Logo'
// import Button from './Button'
import { Flex } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'
// import Button


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
        <Logo />

        <Flex flexDirection={'row'}>
            {
                links1.map(link => <NavLink to={link.href} text={link.text} />)
            }
        </Flex>

        <Flex flexDirection={'row'}>
            <Button colorScheme={'blue'}> mm </Button>
        </Flex>
    </Flex>
  )
}

export default Nav